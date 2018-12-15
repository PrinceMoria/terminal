const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let channelinfo = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("Channel Information for " + message.channel.name)
    .addField("NSFW?", message.channel.nsfw)
    .addField("Channel ID", message.channel.id)
    .addField("Channel type", message.channel.type)
    .addField("Channel description", message.channel.topic)
    .addField("Channel creation", message.channel.createdAt)
 message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
 message.channel.send(channelinfo);
}
  module.exports.help = {
    name: "channelinfo"
}
  