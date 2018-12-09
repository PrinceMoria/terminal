const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.voiceChannel) return message.channel.send("You aren't in a VC! Please join a voice chat.");

    if (!message.guild.me.voiceChannel) return message.channel.send("The bot isn't in a VC!");

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("The bot is in a different channel!");

    message.guild.me.voiceChannel.leave();

    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Left the VC.");
};

module.exports.help = {
    name: "leave"
};