require("dotenv").config();
const fs = require("fs");

module.exports ={
  async execute() {
    //discord stuff
    const Discord = require("discord.js");
    const GatewayIntentBits = Discord.GatewayIntentBits;
    const Collection = Discord.Collection;

    //client stuff
    const client = new Discord.Client({
      intents: GatewayIntentBits.Guilds,
    });
    client.commands = new Collection();
    client.btns = new Collection();
    client.cmdArray = [];

    //functions
    const funcFolder = fs.readdirSync(`./src/functions`);
    for (const folder of funcFolder) {
      const funcFile = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of funcFile)
        require(`./functions/${folder}/${file}`)(client);
    }

    client.eventHandler();
    client.cmdHandler();
    client.compHandler();

    //login to bot
    const token = process.env.BOT_TOKEN;
    client.login(token);
  },
};
