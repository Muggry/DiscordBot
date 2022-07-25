const fs = require('fs')

module.exports = (client) => {
    return console.log('hi')
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