const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (args.includes("@everyone")) return message.channel.send('You cannot do that.');
    if (args.includes("@here")) return message.channel.send('You cannot do that.');
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, but you are not an administrator!");
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please mention a user to ban.");

    let reason = args.join(" ");
    if (!reason) reason = "Insufficient reason.";

    message.guild.member(user).ban(reason);
    message.channel.send("Banned: " + user + ", for the reason: " + reason)
}
module.exports.help = {
    name: "ban"
}