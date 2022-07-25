module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setActivity({ type: "PLAYING", name: `Favorite: Muggry` });
    console.log(`ready, logged in as ${client.user.tag}`);
  },
};
