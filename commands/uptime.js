const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`);
  }
  module.exports.help = {
    name: "uptime"
}
