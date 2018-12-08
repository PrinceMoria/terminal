const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You cannot perform this command, invalid permissions.")
  if(isNaN(args[0])) return message.channel.send("Supply an interger please");
  if (args[0] > 100) return message.channel.send("Sadly, I can't purge any messages over 100. Please choose a smaller interger.");
  message.channel.bulkDelete(args[0]);
}
module.exports.help = {
    name: "purge"
}