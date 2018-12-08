const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You do not have sufficient permissions to purge messages.");
  if(isNaN(args[0])) return message.channel.send(":x: Supply an interger please");
  if (args[0] > 100) return message.channel.send(":x: I can't purge more than 100 messages.");
  message.channel.bulkDelete(args[0]);
  message.channel.send(":white_check_mark: Successfully deleted " + args[0] + " messages.")
}
module.exports.help = {
    name: "purge"
}