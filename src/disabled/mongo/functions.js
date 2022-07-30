const Guild = require(`./guild`);
const { EmbedBuilder } = require('discord.js')


function sendLog(args) {
    const guildData = Guild.findOne({guildId: args.guild.id}).where("logChannelId")
    //const channelToLog = args.guild.channels.cache.get(channelToLogID);

    console.log(guildData)
    if (channelToLog == 'Not Found') return;
    const embed = new EmbedBuilder()
        .setTitle(`New Log!`)
        .setDescription(`${args.description}`)
        .setColor(`Random`);

    channelToLog.send({
        embeds: [embed]
    });
    
}

module.exports = {
    SendLog: sendLog,
}