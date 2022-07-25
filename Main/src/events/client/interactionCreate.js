const fs = require('fs')

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName)
            if (!command) return
            
            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error)
                await interaction.reply({
                    content: 'Elf bot had some problems executing this command, please try again.',
                    ephemeral: true
                })

            }
        }
    }
}