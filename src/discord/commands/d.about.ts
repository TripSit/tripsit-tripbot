import {BaseCommandInteraction, Client} from 'discord.js';
import {Command} from '../utils/command';
const PREFIX = require('path').parse(__filename).name;
const logger = require('../../../global/utils/logger');
const {about} = require('../../../global/utils/about');
const template = require('../../utils/embed-template');

export const Hello: Command = {
  name: 'about',
  description: 'Information about the bot',
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = 'Hello there!';
    await interaction.followUp({
      ephemeral: true,
      content,
    });
    return;
    const tripsitInfo = await about();
    const embed = template.embedTemplate()
        .setColor('DARK_BLUE')
        .setTitle('About TripSit')
        .setURL('https://tripsit.me/about/')
        .setDescription(tripsitInfo.description)
        .addFields(
            {
              name: 'Disclaimer',
              value: tripsitInfo.disclaimer,
            },
            {
              name: 'Support TripSit',
              value: tripsitInfo.support,
            },
            {
              name: 'Feedback',
              value: tripsitInfo.feedback,
            },
            {
              name: 'Credits',
              value: tripsitInfo.credits,
            },
        );
    if (interaction.replied) interaction.followUp({embeds: [embed]});
    else interaction.reply({embeds: [embed]});
    logger.debug(`[${PREFIX}] finished!`);

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
