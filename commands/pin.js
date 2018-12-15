const Discord = require("discord.js");

module.exports.run = (bot, message, args, discord) => {
    let nid = args.join(' ');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have sufficient permissions to pin messages.");
    if (args.length < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a message ID.")
      message.channel.fetchMessage(nid).then(id => {
        id.pin().catch(err => {
          message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Failed to pin" + id)
          console.log(err)
        })
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " +  `Successfully pinned **${id}**.`)
      }).catch(() => {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `${nid} isn't a real message ID. Please enter a valid ID.`)
      })
  }
  module.exports.help = {
    name: "pin"
}
