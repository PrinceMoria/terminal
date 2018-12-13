const Discord = require("discord.js");

module.exports.run = async (client, message, args) => { 

    let user = message.mentions.users.first();

    if (user === undefined) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a mention.");
const userInfo = new Discord.RichEmbed()
            .setAuthor('Info For ' + user.username, true)
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setThumbnail(user.avatarURL)
            .addField('Discriminator', user.discriminator, true)
            .addField('Status', user.presence.status, true)
            .addField('Join Date', message.member.joinedAt, true)
            .addField('Created Account', user.createdAt, true)
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
        message.channel.send(userInfo)
    }
module.exports.help = {
    name: "userinfo"
};
