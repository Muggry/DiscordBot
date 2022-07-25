const { CommandInteraction } = require('discord.js');
const fs = require('fs')

module.exports = (client) => {
    const cmdFiles = fs.readdirSync('../commands/').filter(file => file.endsWith('.js'));

    for (const file of cmdFiles) {
        const cmd = fs.readdirSync(`../commands/${file}`);
        if (cmd.name) {
            client.commands.set(cmd.name, cmd);
        } else {
            continue;
        }
    }
}