const fs = require("fs");
const { EmbedBuilder } = require(`discord.js`);
const { channel } = require("diagnostics_channel");
const { join } = require("path");

module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    console.log(`member`)
    const channel = member.guild.channel.cache.find(channel => channel.name === 'general')
    if (!channel) return;

    const joinedEmbed = new EmbedBuilder()
      .setTitle(`Welcome to ${member.guild.name}!`)
      .setDescription(`Hope you have a good stay here?`);

      channel.send(joinedEmbed)
  }
};
