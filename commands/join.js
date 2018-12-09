const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.member.voiceChannel) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please join a voice chat.");

    if (message.guild.me.voiceChannel) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Terminal is already connected to a VC.");

    message.member.voiceChannel.join()
        .then(connection => {
            message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Joined the VC.")
        });
};

module.exports.help = {
    name: "join"
};