import {Client} from 'discord.js';
import logger from '../../global/utils/logger';
const PREFIX = require('path').parse(__filename).name;
import {registerCommands} from '../utils/commandRegister';

export const onReady = async (client: Client) => {
  logger.debug(`[${PREFIX}] start!`);
  Promise.all([registerCommands(client)])
      .then(() => logger.info(`[${PREFIX}] Commands registered!`));
};
