const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns api latency when activated."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Returned Client Ping")
      .setFields(
        {
          name: `Api Latency:`,
          value: `${client.ws.ping}`
        }
      )
      .setColor(0x18e1ee);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
