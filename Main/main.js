var print = function(s) {
    console.log(s)
}

var warn = function(s) {
    console.warn(s)
}

var error = function(s) {
    console.error(s)
}


const Discord = require('discord.js');

const client = new Discord.Client({
    allowedMentions: {
        parse: [
            'users',
            'roles',
        ],
        repliedUser: true,
    },
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ],
    partials: [
        'CHANNEL',
    ],
    presence: {
        status: 'online',
        activities: [
            {
                type: 'LISTENING',
                name: `${process.env.BOT_COMMAND_PREFIX}help`,
            },
        ],
    },
});

client.$ = {
    commands: new Discord.Collection(),
    interactions: new Discord.Collection(),
};





client.once('ready', () => {
    print("Bot is ready")
});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const commmand = args.shfit().toLowerCase();
    
});




const token = process.env.BOT_TOKEN;
client.login(token)