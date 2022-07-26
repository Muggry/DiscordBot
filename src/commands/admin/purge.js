const {
  SlashCommandBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
  Guild,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Kick a member")
    .addNumberOption((option) =>
      option
        .setName("number")
        .setDescription("Number of messages that will be purged")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction, client) {


    const member = interaction.guild.members.cache.get(
      interaction.user.id
    );

    const { roles } = interaction.member;
    const role = await interaction.guild
      .fetch("1001329560857612308")
      .catch(console.error);
      console.log(roles.cache.has("1001329560857612308" ))
      console.log(member.permissions.has(PermissionsBitField.Flags.ManageMessages) )

      if (!member.permissions.has(PermissionsBitField.Flags.ManageMessages) ) {
        await interaction.reply({
          content: `You do not perms to use this.`,
          ephemeral: true,
        });
        return
      }

      const amount = interaction.options.getInteger('Number')
      if (amount >100) return interaction.followUp({content: `The number has to be 100 or lower.`})

      const messages = await interaction.channel.messages.fetch({
        limit: amount + 1,
      })




      await interaction.channel.bulkDelete(amount, true);

  },
};
