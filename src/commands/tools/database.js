const Guild = require(`../../schemas/guild`);
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const mongoose = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("database")
    .setDescription("Returns database info"),
  async execute(interaction, client) {
    let guildProfile = Guild.findOne({ guildId: interaction.guild.id });

    if (!guildProfile) {
      guildProfile = await new Guild({
        _id: mongoose.Types.ObjectId(),
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        guildIcon: interaction.guild.iconUrl()
          ? interaction.guild.iconUrl()
          : "None",
      });
    }

    guildProfile.save()


    const embed = new EmbedBuilder()
      .setTitle(`Info for ${guildProfile.guildName}`)
      .setFields(
        {
          name: "Guild Id",
          value: `${guildProfile.guildId}`
        },
        {
          name: "Guild Icon Url",
          value: `${guildProfile.guildIcon}`
        }
      )
    await interaction.reply({
      embeds: [embed],
    });
  },
};
