const fs = require("fs");

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
        console.error(err);
      }
    }
  },
};
