const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (args.includes("@everyone")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + ' **Error**');
    if (args.includes("@here")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + ' **Error** ');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + " You do not have sufficient permissions to kick this player.");
    let tokick = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tokick) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " Couldn't find user.");
    if (tokick.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " The user you are trying to kick is either the same, or higher ranking than you.");
    var member = message.mentions.members.first();
    member.kick().then((member) => {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " " + member.displayName + " has been kicked by " + message.author.username);
    })
}

module.exports.help = {
    name: "kick",
}
