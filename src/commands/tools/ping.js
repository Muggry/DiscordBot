const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns client ping when activated."),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const embed = new EmbedBuilder()
      .setTitle("Returned Client Ping")
      .setFields(
        {
          name: `Api Latency:`,
          value: `${client.ws.ping}`,
        },
        {
          name: `Ping`,
          value: `${message.createdTimestamp - interaction.createdTimestamp}`,
        }
      )
      .setColor(0x18e1ee);

    await interaction.editReply({
      embeds: [embed],
    });
  },
};
