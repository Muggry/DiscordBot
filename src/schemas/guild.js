const { Schema, model} = require('mongoose')

const guildSchema = Schema({
   _id: Schema.Types.ObjectId,
   guildId: String,
   guildName: String,
   guildIcon: String
})

module.exports = model("Guild", guildSchema, "guilds")