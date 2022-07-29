const {
  SlashCommandBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
  Guild,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("purge select number of messages")
    .addNumberOption((option) =>
      option
        .setName("number")
        .setDescription("Number of messages that will be purged")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction, client) {
    const member = interaction.guild.members.cache.get(interaction.user.id);


    if (!member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      await interaction.reply({
        content: `You do not perms to use this.`,
        ephemeral: true,
      });
      return;
    }

    const amount = interaction.options.getNumber("Number");
    if (amount > 100)
      return interaction.followUp({
        content: `The number has to be 100 or lower.`,
      });

    const messages = await interaction.channel.messages.fetch({
      limit: amount,
    });

    await interaction.channel.bulkDelete(amount);
  },
};
