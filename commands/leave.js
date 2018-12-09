const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.voiceChannel) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please join a voice chat.");

    if (!message.guild.me.voiceChannel) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "I am not in a voice chat.");

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("The bot is in a different channel!");

    message.member.voiceChannel.leave()

    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Left the VC.");
};

module.exports.help = {
    name: "leave"
};