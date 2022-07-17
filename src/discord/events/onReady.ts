import {Client} from 'discord.js';
import {REST} from '@discordjs/rest';
import {Routes} from 'discord-api-types/v9';
import {CommandList} from '../utils/commandList';
import logger from '../../global/utils/logger';
const PREFIX = require('path').parse(__filename).name;

export const onReady = async (client: Client) => {
  const rest = new REST({version: '9'}).setToken(
    process.env.DISCORD_CLIENT_TOKEN as string,
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
      Routes.applicationGuildCommands(
          client.user?.id || 'missing id',
      process.env.DISCORD_GUILD_ID as string,
      ),
      {body: commandData},
  );

  if (client.user === null ) {
    logger.error(`[${PREFIX}] Discord client is null`);
    return;
  }

  logger.info(`[${PREFIX}] ${client.user.username} is online`);
};
