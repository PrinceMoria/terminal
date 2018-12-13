const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " You do not have sufficient permissions to pin messages.");
if (!args[0] || args[0].length < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " Please state a message ID to pin.");
const id = bot.fetchMessage(args[0])
    message.guild.pin(id)

message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " Pinned message ID " + id + ".")
}
module.exports.help = {
    name: "pin"
}
