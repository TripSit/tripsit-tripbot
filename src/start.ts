// Bad things happen if this is not at the start.
require('dotenv').config();
import logger from './global/utils/logger';
import {discordConnect} from './discord/discordAPI';
import {validateEnv} from './global/utils/validateEnv';
const PREFIX = require('path').parse(__filename).name;

// const {ircConnect} = require('./irc/ircAPI');
// const {telegramConnect} = require('./telegram/telegramAPI');
// const {firebaseConnect} = require('./global/services/firebaseAPI');
// const {webserverConnect} = require('./webserver/webserverAPI');
// const {runTimer} = require('./global/services/timerAPI');

/**
* Starts everything in the bot.
*/
async function start() {
  if (!validateEnv()) return;
  //   global.userDb = {};
  //   await firebaseConnect();

  await discordConnect();

  //   await ircConnect();

  //   await telegramConnect();

  //   await runTimer();

//   await webserverConnect();
}

start();

// Stop the bot when the process is closed (via Ctrl-C).
const destroy = () => {
//   global.manager.teardown();
  logger.info('Bot stopped.');
};

process.on('unhandledRejection', (error: Error) => {
  logger.error(`[${PREFIX}] error.name: ${error.name}`);
  logger.error(`[${PREFIX}] error.message: ${error.message}`);
  logger.error(`[${PREFIX}] error.stack: ${error.stack}`);
});

process.on('SIGINT', destroy);
process.on('SIGTERM', destroy);
