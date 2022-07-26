const { ActivityType, EmbedBuilder, WebhookClient } = require("discord.js");
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1001568214528032798/LNjR1MVwCffgrwNliPoqnnbtKcYGSHOlesq-p5cgrjKidBYPYP5wqJTTJ040mCjk_YW7' });

function webhookError(error, client) {
  const webEmbed = new EmbedBuilder()
    .setTitle(`New Login!`)
    .setDescription(error)
    .setFields(
      {
        name: `Time`,
        value: new Date(client.readyTimestamp).toTimeString(),
      }
    )
    .setColor(`Blurple`)
  webhookClient.send({
    embeds: [webEmbed]
  })
};

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setActivity("Mugtilties", { type: ActivityType.Watching });
    console.log(`ready, logged in as ${client.user.tag}`);

    webhookError(`Logged in`, client)
  },
};
