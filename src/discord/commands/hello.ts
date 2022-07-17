import {SlashCommandBuilder} from '@discordjs/builders';
import {Command} from '../utils/commandDef';

export const Hello: Command = {
  data: new SlashCommandBuilder()
      .setName('hello')
      .setDescription('Check in for the 100 Days of Code challenge.')
      .addStringOption((option) =>
        option
            .setName('message')
            .setDescription('test')
            .setRequired(true),
      ),
  run: async (interaction) => {
    const content = 'Hello there!';

    await interaction.reply({
      ephemeral: true,
      content,
    });
  },
};
