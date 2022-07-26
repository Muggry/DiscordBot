const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  PermissionsBitField,
  CommandInteractionOptionResolve,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a member")
    .addUserOption((option) =>
      option
        .setName("member")
        .setDescription("The member to kick.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason of the kick")
        .setRequired(false)
    ),

  async execute(interaction, client) {
    const { roles } = interaction.member;
    const guild = interaction.guild;
    const role = await guild
      .fetch("1001329560857612308")
      .catch(console.error);

    const toKick = interaction.options.getUser("member");
    let toKickMem = guild.members.fetch(toKick.id).catch(console.error);
    console.log(toKickMem);

    const reaction = interaction.options.getString("reason");

    if (!roles.cache.has("1001329560857612308")) {
      await interaction.reply({
        content: "You cannot use this command.",
      });

      return;
    } /*else if (toKick.hasPermissions(`KICK_MEMBERS`)) {
        await interaction.reply({
          content: `You cannot kick this member!`
         })*/

    toKickMem.kick();
  },
};
