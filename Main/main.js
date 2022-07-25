var print = function(s) {
    console.log(s)
}

var warn = function(s) {
    console.warn(s)
}

var error = function(s) {
    console.error(s)
}

var prefix = ".";


const discord = require('discord.js');

const client = new discord.Client({
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,
    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGE_REACTIONS",
    ],
})





client.once('ready', () => {
    print("Bot is ready")
});

client.on("messageCreate", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const commmand = args.shfit().toLowerCase();
    
});




const token = "MTAwMDg1OTAxNjEwMjE1MDI3NA.GO_32w.nEjlNjRxFqJYIlcIcaaoMRU63Z1ixoX5UR2mOg";
client.login(token)