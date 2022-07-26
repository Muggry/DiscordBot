const {
  SlashCommandBuilder,
  PermissionsBitField,
  PermissionFlagsBits,
  Guild,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a member")
    .addUserOption((user) =>
      user
        .setName("user")
        .setDescription("The user that will be kicked.")
        .setRequired(true)
    )
    .addStringOption((reason) =>
      reason
        .setName("reason")
        .setDescription("The reason for the kick.")
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction, client) {
    const reason = interaction.options.getString("reason");

    const member = interaction.guild.members.cache.get(
      interaction.options.getUser("user").id
    );


    if (member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      await interaction.reply({
        content: `You cant kick a member who has kick perms.`,
        ephemeral: true,
      });
      return;
    }
    // kick the user from the guild
    try {
      await member.kick(reason);
      interaction.reply({
        content: `Kicked ${member.user.username}#${member.user.discriminator}`,
        ephemeral: true,
      });
    } catch (error) {
      console.log(error);
      interaction.reply({
        content: `Something went wrong while kicking ${member.user.username}#${member.user.discriminator}`,
        ephemeral: true,
      });
    }
  },
};
