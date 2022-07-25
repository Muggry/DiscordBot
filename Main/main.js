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

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });





client.once('ready', () => {
    print("Bot is ready")
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const commmand = args.shfit().toLowerCase();
    
    if (!commmand == "hi") {
        message.channel.send("hi")
    }
});




const token = process.env.BOT_TOKEN;
client.login(token)