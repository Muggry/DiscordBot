module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`ready, logged in as ${client.user.tag}`);
    }
}