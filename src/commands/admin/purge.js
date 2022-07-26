const {
  SlashCommandBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
  Guild,
} = require("discord.js");

const ms = require(`ms`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Kick a member")
    .addIntegerOption((option) =>
      option
        .setName("number")
        .setDescription("Number of messages that will be purged")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction, client) {
    
    if (!roles.cache.has("1001329560857612308" ) || member.permissions.has(PermissionsBitField.Flags.ManageMessages) ) {
      await interaction.reply({
        content: `You do not have the adminstrator role.`,
        ephemeral: true,
      });
      return
    }

    const member = interaction.guild.members.cache.get(
      interaction.user.id
    );

    const { roles } = interaction.member;
    const role = await interaction.guild
      .fetch("1001329560857612308")
      .catch(console.error);

      const amount = interaction.options.getInteger('Number')
      if (amount >100) return interaction.followUp({content: `The number has to be 100 or lower.`})

      const messages = await interaction.channel.messages.fetch({
        limit: amount + 1,
      })

      const filtered = messages.filter((message) => Date.now() - message.createdTimestamp < ms('14 days'))


      await interaction.channel.bulkDelete(filtered);

  },
};
