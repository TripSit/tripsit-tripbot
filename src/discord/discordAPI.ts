import {Client} from 'discord.js';
import interactionCreate from './listeners/interactionCreate';
import ready from './listeners/ready';
import env from '../env.config';
const logger = require('../global/utils/logger');
const PREFIX = require('path').parse(__filename).name;

/**
 * Starts the discord bot
 */
export function discordConnect(): void {
  logger.info(`[${PREFIX}] Starting discord bot!`);
  const client = new Client({
    intents: [],
  });
  // process.env.NODE_ENV = 'development';
  ready(client);
  interactionCreate(client);

  client.login(env.DISCORD_CLIENT_TOKEN);
}

