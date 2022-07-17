import {Client} from 'discord.js';
import {Command} from './commandDef';
import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';
import {Collection} from 'discord.js';
import fs from 'fs/promises';
import path from 'path';
import logger from '../../global/utils/logger';
const PREFIX = path.parse(__filename).name;

/**
 * @param {client} client The discord client
 * @return {Promise<Command[]>} The list of commands
 */
export async function registerCommands(client: Client): Promise<void> {
  logger.debug(`[${PREFIX}] start!`);
  /**
     *
     * @param {string} commandType The type of command either global or guild
     */
  async function registerType(commandType:string) {
    const rest = new REST({version: '9'}).setToken(
      process.env.DISCORD_CLIENT_TOKEN as string,
    );
    const commandDir = path.join(__dirname, '../commands');
    client.commands = new Collection();
    const globalCommands:Command[] = [];
    const guildCommands:Command[] = [];

    const files = await fs.readdir(path.join(commandDir, commandType));
    files
        .filter((file) => file.endsWith('.ts'))
        .map((file) => require(`${commandDir}\\${commandType}\\${file}`))
        .forEach((command) => {
          // logger.debug(`[${PREFIX}] command: ${JSON.stringify(command, null, 2)}`);

          const fileName = Object.keys(command)[0];
          const functionName = command[fileName].data.name;
          client.commands.set(functionName, command[fileName].data);
          logger.debug(`[${PREFIX}] command: ${functionName} set!`);
          if (commandType === 'global') {
            globalCommands.push(command[fileName]);
            logger.debug(`[${PREFIX}] command: ${functionName} added globally!`);
          } else {
            guildCommands.push(command[fileName]);
            logger.debug(`[${PREFIX}] command: ${functionName} added guildly!`);
          }
        });

    // Register commands via REST
    if (commandType === 'global') {
      const globalCommandData = globalCommands.map((command) =>
        command.data.toJSON());

      logger.debug(`[${PREFIX}] client.user: ${client}`);

      await rest.put(
          Routes.applicationGuildCommands(
              client.user?.id || 'missing id',
        process.env.DISCORD_GUILD_ID as string,
          ),
          {body: globalCommandData},
      );
      logger.debug(`[${PREFIX}] global commands registered!`);
    } else {
      const guildCommandData = guildCommands.map((command) =>
        command.data.toJSON());

      await rest.put(
          Routes.applicationCommands(client.user?.id || 'missing id'),
          {body: guildCommandData},
      );

      logger.debug(`[${PREFIX}] guild commands registered!`);

      if (client.user === null ) {
        logger.error(`[${PREFIX}] Discord client is null`);
        return;
      }
    }
  }
  Promise.all([registerType('global'), registerType('guild')]);
};
