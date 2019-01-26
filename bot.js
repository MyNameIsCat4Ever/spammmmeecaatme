const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538727763373457440")
setInterval(function() {
channel.send(`..spam cat spam cat`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
