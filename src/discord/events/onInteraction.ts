import {Interaction} from 'discord.js';
import {CommandList} from '../utils/commandList';
import logger from '../../global/utils/logger';
const PREFIX = require('path').parse(__filename).name;

export const onInteraction = async (interaction: Interaction) => {
  logger.debug(`[${PREFIX}] start!`);
  if (interaction.isCommand()) {
    for (const Command of CommandList) {
      if (interaction.commandName === Command.data.name) {
        await Command.run(interaction);
        break;
      }
    }
  }
};
