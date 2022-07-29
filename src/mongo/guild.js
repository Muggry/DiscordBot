const { Schema, model} = require('mongoose')

const Guild = Schema({
    guildId: String,
    welcomeLeaveChannelId: String,
    logChannelId: String,
})

module.exports = model("Guild", Guild)