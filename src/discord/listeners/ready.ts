import {Client} from 'discord.js';
import {Commands} from '../utils/commands';
const PREFIX = require('path').parse(__filename).name;
const logger = require('../../global/utils/logger');

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    await client.application.commands.set(Commands);

    logger.info(`[${PREFIX}] ${client.user.username} is online`);
  });
};
