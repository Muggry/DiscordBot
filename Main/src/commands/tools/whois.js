const { SlashCommandBuilder, EmbedBuilder, CommandInteractionOptionResolver, inlineCode } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription("Returns info about a user.")
    .addUserOption((option) =>
      option
        .setName('target')
        .setDescription("Input of the user")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    const userToCheck = interaction.options.getUser('target')

    const embed = new EmbedBuilder()
      .setTitle(`Info about ${userToCheck}`)
      .setAuthor({
        name: `${userToCheck}`,
        iconURL: `${userToCheck.displayAvatarURL()}`

      })
      .setFields(
        {
          name: `Registered At`,
          value: `${userToCheck.createdAt}`,
          inline: true
        }
      )
      .setColor(0x18e1ee);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
