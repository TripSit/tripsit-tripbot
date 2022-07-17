import {Client} from 'discord.js';
// import interactionCreate from './events/onInteraction';
// import ready from './events/ready';
import env from '../global/utils/env.config';
import logger from '../global/utils/logger';
import {onReady} from './events/onReady';
import {onInteraction} from './events/onInteraction';

const PREFIX = require('path').parse(__filename).name;

/**
 * Starts the discord bot
 */
export async function discordConnect(): Promise<void> {
  logger.debug(`[${PREFIX}] Starting discord bot!`);
  const client = new Client({
    intents: [],
  });

  client.on('ready', async () => await onReady(client));

  client.on(
      'interactionCreate',
      async (interaction) => await onInteraction(interaction),
  );

  client.login(env.DISCORD_CLIENT_TOKEN);
}
