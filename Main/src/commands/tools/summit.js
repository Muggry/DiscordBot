const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("summit")
    .setDescription("Returns Muggry's own discord server"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("summit")
      .setLabel("Discord Server")
      .setStyle(ButtonStyle.Primary);

    const embed = new EmbedBuilder()
      .setTitle("About Summit Integrations")
      .setDescription(
        `
        Welcome all to Summit Integrations. 
        This server was founded by Muggry, a young scripter thriving to learn more about coding / scripting. 
        As he goes on his journey on learning more about scripting and coding, 
        he will make products that hopefully everyone will enjoy without any problems.
        `
      )
      .setImage("https://i.imgur.com/K6MXdqC.png");

    await interaction.reply({
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
