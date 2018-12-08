const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (args.includes("@everyone")) return message.channel.send("`/" + message.guild + "/" + message.channel + "/`" + ' **Error**');
    if (args.includes("@here")) return message.channel.send("`/" + message.guild + "/" + message.channel + "/`" + ' **Error** ');
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("`/" + message.guild + "/" + message.channel + "/`" + " You do not have sufficient permissions to kick this player.");
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("`/" + message.guild + "/" + message.channel + "/`" + " Please mention a user to ban.");

    let reason = args.join(" ");
    if (!reason) reason = " Insufficient reason.";

    message.guild.member(user).ban(reason);
    message.channel.send("`/" + message.guild + "/" + message.channel + "/`" + " Successfully banned user: " + user + ", for the reason: " + reason)
}
module.exports.help = {
    name: "ban"
}