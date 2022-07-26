const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  PermissionsBitField,
  CommandInteractionOptionResolve,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("announce")
    .setDescription("Announces a message to a channel")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to announce")
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel to announce the message to")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("The role to ping")
        .setRequired(false)
    ),

  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild
      .fetch("1001329560857612308")
      .catch(console.error);

    if (roles.cache.has("1001329560857612308")) {
      const channel = interaction.options.getChannel("channel");
      const toAnnounce = interaction.options.getString("message");
      let roleToPing = interaction.options.getRole("role");

      if (!roleToPing) {
        roleToPing = '-'
      }

      const embed = new EmbedBuilder()
        .setTitle("New Annoucement!")
        .setAuthor({
          name: `Requested by ${interaction.user.username}`,
        })
        .setDescription(`${toAnnounce}`);

      await interaction.reply({
        content: `Success!`,
        ephemeral: true,
      });

      channel.send({ 
        embeds: [embed],
        content: `<@${roleToPing.id}>`
      });
    } else {
      await interaction.reply({
        content: `You do not have the adminstrator role.`,
        ephemeral: true,
      });
    }
  },
};
