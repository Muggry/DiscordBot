const {
  SlashCommandBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
  CommandInteractionOptionResolver,
} = require("discord.js");

const Guild = require(`../../mongo/guild`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`setup`)
    .setDescription(`Setups your server for this bot`)
    .addChannelOption((option) =>
      option.setName(`logchannel`).setDescription(`idk yet`).setRequired(false)
    )
    .addChannelOption((option) =>
      option
        .setName(`memberaddedchannel`)
        .setDescription(`To log who left / joined your server.`)
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    let logChannelOpt = interaction.options.getChannel("logchannel");
    let welcomeLeaveChannel =
      interaction.options.getChannel("memberaddedchannel");

    
    const found = await Guild.findOne({ guildId: interaction.guild.id });
    console.log(found)

    if (!logChannelOpt) {
      logChannelOpt = {
        id: "not found"
      }
    }

    if (!welcomeLeaveChannel) {
     welcomeLeaveChannel = {
      id: "not found"
     }
    }

    if (found) {
      await Guild.findOne(
        { guildId: interaction.guild.id },
        {
          $set: {
            welcomeLeaveChannelId: welcomeLeaveChannel || "not entered",
            logChannelId: logChannelOpt || "not entered",
          },
        },
        { new: true }
      );
      await interaction.reply({
        content: `Successfully changed the guild, ${found}`
      });
    } else {
      const newGuild = await Guild.create({
        guildId: interaction.guild.id,
        welcomeLeaveChannelId: welcomeLeaveChannel || "not entered",
        logChannelId: logChannelOpt || "not entered",
      });

      await interaction.reply({
        content: "Successfully setup the guild."
      });
    }

  },
};
