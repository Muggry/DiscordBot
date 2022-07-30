const {
  SlashCommandBuilder,
  EmbedBuilder,
  CommandInteractionOptionResolver,
  inlineCode,
  userMention,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription("Returns info about a user.")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Input of the user")
        .setRequired(false)
    ),

  async execute(interaction, client) {
    const message = interaction.options.data;

    const userToCheck = interaction.options.getUser("target") || interaction.user
    const memToCheck = interaction.guild.members.cache.get(userToCheck.id) 

    const embed = new EmbedBuilder()
      .setTitle(`Info about ${userToCheck.username}`)
      .setColor(`Random`)
      .setAuthor({
        name: `${userToCheck}`,
        iconURL: `${userToCheck.displayAvatarURL({dynamic: true})}`,
      })
      .setThumbnail(userToCheck.displayAvatarURL())
      .setFields(
        {
          name: `Registered At`,
          value: new Date(userToCheck.createdTimestamp).toLocaleDateString(),
          inline: true
        },
        {
          name: `Joined At`,
          value: new Date(memToCheck.joinedTimestamp).toLocaleDateString(),
          inline: true
        },
        {
          name: `User Name`,
          value: `${userToCheck.username}`,
        },
        {
          name: `Nickname`,
          value: memToCheck.nickname || `None`
        },
      )

    await interaction.reply({
      embeds: [embed],
    });
  },
};
