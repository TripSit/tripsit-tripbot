import {Client} from 'discord.js';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';
import env from '../global/utils/env.config';
import logger from '../global/utils/logger';
const PREFIX = require('path').parse(__filename).name;

/**
 * Starts the discord bot
 */
export async function discordConnect(): Promise<void> {
  logger.debug(`[${PREFIX}] Starting discord bot!`);
  const client = new Client({
    intents: [],
  });

  ready(client);
  interactionCreate(client);

  await client.login(env.DISCORD_CLIENT_TOKEN);
}

