require('dotenv').config()
const fs = require('fs')

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
client.events = new Collection();

['cmdHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client)
})


const token = process.env.BOT_TOKEN;
client.login(token)