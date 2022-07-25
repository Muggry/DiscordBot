const fs = require('fs')

module.exports = (client) => {
    client.cmdHandler = async () => {
        const cmdFolder = fs.readdirSync('./src/commands');
        for (const folder of cmdFolder) do {
            const cmdFiles = fs.readdirSync('./src/commands/${folder}').filter((file) => file.endsWith(".js"));

            const {commands, cmdArray} = client;

            for (const file of cmdFiles) do {
                const command = require('../../commands/${folder}/${file}');
                commands.set(command.data.name, command);
                cmdArray.push(command.data.toJSON());
            }
        }
    }
}