const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let use = message.mentions.users.first() || message.author

    if (use === undefined) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a mention.");
const userInfo = new Discord.RichEmbed()
            .setAuthor('Info For ' + use.username, true)
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setThumbnail(use.user.displayAvatarURL)
            .addField('Discriminator', use.discriminator, true)
            .addField('Status', use.presence.status, true)
            .addField('Join Date', message.member.joinedAt, true)
            .addField('Created Account', use.createdAt, true)
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
        message.channel.send(userInfo)
    }
module.exports.help = {
    name: "userinfo"
};
