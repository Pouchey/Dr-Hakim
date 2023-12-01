import { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Clear some messages!')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option.setName('amount').setDescription('Amount of messages to clear').setRequired(true)
    ),
  execute: async (interaction: CommandInteraction) => {
    // @ts-expect-error - This is a bug in the types
    const amount = interaction.options?.getString('amount') as string;

    if (amount) {
      const amountNumber = parseInt(amount);
      if (amountNumber > 100) {
        return interaction.reply({
          content: 'You can only delete a maximum of 100 messages at a time!',
          ephemeral: true
        });
      } else if (amountNumber < 1) {
        return interaction.reply({
          content: 'You must delete at least one message!',
          ephemeral: true
        });
      } else {
        // @ts-expect-error - This is a bug in the types
        await interaction.channel?.bulkDelete(amountNumber);
        return interaction.reply({
          content: `Deleted ${amountNumber} messages!`,
          ephemeral: true
        });
      }
    }
  }
};
