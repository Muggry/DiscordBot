const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setActivity("Mugtilties", { type: ActivityType.Watching });
    console.log(`ready, logged in as ${client.user.tag}`);
  },
};
