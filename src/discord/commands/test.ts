import {SlashCommandBuilder} from '@discordjs/builders';
import {MessageEmbed} from 'discord.js';
import {Command} from '../utils/commandDef';

export const test: Command = {
  data: new SlashCommandBuilder()
      .setName('test')
      .setDescription('Check in for the 100 Days of Code challenge.')
      .addStringOption((option) =>
        option
            .setName('message')
            .setDescription('test')
            .setRequired(true),
      ),
  run: async (interaction) => {
    await interaction.deferReply();
    const {user} = interaction;
    const text = interaction.options.getString('message', true);

    const oneHundredEmbed = new MessageEmbed();
    oneHundredEmbed.setTitle('100 Days of Code');
    oneHundredEmbed.setDescription(text);
    oneHundredEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    oneHundredEmbed.addField('Round', '1', true);
    oneHundredEmbed.addField('Day', 'tuesday', true);
    oneHundredEmbed.setFooter({
      text:
        'Day completed: today',
    });

    await interaction.editReply({embeds: [oneHundredEmbed]});
  },
};
