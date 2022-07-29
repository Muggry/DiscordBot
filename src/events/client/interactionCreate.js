const fs = require("fs");
const { EmbedBuilder, WebhookClient } = require(`discord.js`);
const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1001568214528032798/LNjR1MVwCffgrwNliPoqnnbtKcYGSHOlesq-p5cgrjKidBYPYP5wqJTTJ040mCjk_YW7",
});

function webhookError(error) {
  /*const webEmbed = new EmbedBuilder()
    .setTitle(`New Error!`)
    .setDescription(error.rawError.message)
    .setColor(`Random`);
  webhookClient.send({
    embeds: [webEmbed],
  });*/
  console.log(`no`)
}

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        webhookError(error);
        console.error(error);
        await interaction.reply({
          content:
            "Elf bot had some problems executing this command, please try again.",
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const { btns } = client;
      const { customId } = interaction;
      const button = btns.get(customId);

      if (!button) {
        return console.error(
          `There is no code for the button with the id ${customId}`
        );
      }
      try {
        await button.execute(interaction, client);
      } catch (err) {
        webhookError(err);
        console.error(err);
      }
    }
  },
};
