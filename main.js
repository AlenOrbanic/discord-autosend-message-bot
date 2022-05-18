const { Client, Intents, GuildMember } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, /*Intents.FLAGS.GUILD_MEMBERS*/]
});
client.on('ready', () => {
  console.log('Bot je online');
})
const { MessageEmbed } = require('discord.js');
const PREFIX = '!';
var counter = 0;
var i = 1;
client.on("messageCreate", (message) => {
    if (message.content.startsWith(PREFIX + "start")) {
      let counter = 1; // supposing the first file is ./folder/0.webm
      let interval = setInterval(() => {
        message.channel.send({ files: [ "./yourfolder/" + counter + ".webm" ] });
        counter++;
        if (counter == 3990) {
          clearInterval(interval);
        }
      }, 30000);
    }
  });

const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Trenutno prezentira chat bota",
        state: "kao projekt IUP-a",
        startTimestamp: new Date(),
        largeImageKey: "djiga",
        largeImageText: "Testing",
    });
})
console.log("Rich presence is now active");
    rpc.login({
        clientId: ""
    });

client.login("")