const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " You do not have sufficient permissions to announce in a channel.");
    if (!args || args.length < 1) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please put an announcement channel and a message.")
    }
    let embedmsg = args.slice(0).join(" ");
    let announceembed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setAuthor('Announement from: ' + message.author.username)
    .setDescription(embedmsg);
    let announceChannel = message.mentions.channels.first();
    message.guild.channels.find(t => t.id == announceChannel.id).send("**/" + message.guild + "/" + message.channel.name + "/**")
    message.guild.channels.find(t => t.id == announceChannel.id).send(announceembed);
}
module.exports.help = {
    name: "announce"
}
