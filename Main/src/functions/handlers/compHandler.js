const { readdirSync } = require("fs");

module.exports   = (client) => {
  client.compHandler = async () => {
    const compFolder = readdirSync(`./src/components`);
    for (const folder of compFolder) {
      const compFiles = readdirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      const { btns } = client;

      switch (folder) {
        case "buttons":
          for (const file of compFiles) {
            const btn = require(`../../components/${folder}/${file}`);
            btns.set(btn.data.name, btn);
          }
          break;

        default:
          break;
      }
    }
  };
};
