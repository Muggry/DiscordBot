require('dotenv').config()
const fs = require('fs')

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
client.cmdArray = [];

const funcFolder = fs.readdirSync('./src/functions');
for (const folder of funcFolder)  {
    const funcFiles = fs.readdirSync('./src/function/${folder}').filter(file => file.endsWith('.js'));

    for (const files of funcFiles) 
        require('./functions/${folder}/${file}')(client);
}

client.cmdHandler();
client.eventHandler();


const token = process.env.BOT_TOKEN;
client.login(token)