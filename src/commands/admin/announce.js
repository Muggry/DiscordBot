const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  PermissionsBitField,
  CommandInteractionOptionResolve,
  EmbedBuilder,
} = require("discord.js");

const functions = require(`../../mongo/functions`)

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
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction, client) {
    const member = interaction.guild.members.cache.get(interaction.user.id);

    if (member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      const channel = interaction.options.getChannel("channel");
      const toAnnounce = interaction.options.getString("message");
      let roleToPing = interaction.options.getRole("role");

      if (!roleToPing) {
        roleToPing = "-"
      }


      const embed = new EmbedBuilder()
        .setTitle("New Annoucement!")
        .setAuthor({
          name: `Requested by ${interaction.user.username}`,
        })
        .setDescription(`${toAnnounce}`);


      channel.send({ 
        embeds: [embed],
        content: `${roleToPing}>` || `no role to ping`,
      });
    } else {
      await interaction.reply({
        content: `You do not have perms.`,
        ephemeral: true,
      });
    }

    functions.SendLog({
      guild: interaction.guild,
      description: `test`
    })

  },
};