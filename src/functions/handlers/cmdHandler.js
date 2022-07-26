const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");
require("dotenv").config();

module.exports = (client) => {
  client.cmdHandler = async () => {
    const cmdFolder = fs.readdirSync(`./src/commands`);
    for (const folder of cmdFolder) {
      const cmdFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, cmdArray } = client;
      for (const file of cmdFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        cmdArray.push(command.data);
        console.log(
          `Command: ${command.data.name} has been passed through the handler.`
        );
      }
    }

    const clientId = process.env.CLIENT_ID;
    const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN);
    try {
      console.log("refreshing application (/) cmds");

      await rest.put(Routes.applicationCommands(clientId), {
        body: client.cmdArray,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
