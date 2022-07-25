var print = function(s) {
    console.log(s)
}

var warn = function(s) {
    console.warn(s)
}

var error = function(s) {
    console.error(s)
}

require('dotenv').config()
const fs = require('fs')

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });





client.once('ready', () => {
    print("Bot is ready")
});


const token = process.env.BOT_TOKEN;
client.login(token)