const Discord = require("discord.js");

module.exports.run = async (bot, client, msg, args) => {

let bicon = bot.user.displayAvatarURL;
let bembed = new Discord.RichEmbed()
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setThumbnail(bicon)
      .addField("**Bot Name:** " + client.username)
      .addField("**Bot Member Size:** " + client.users.size)
      .addField("**Bot Guild Size:** " + client.guilds.size)
      .addField("**RAM Usage:**" + `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`)
      .addField("**Created on:** " + client.user.createdAt)
      .addField(`**Discord.js Version:** ` + `Discord JS v${Discord.version}`)
      .addField("**Node Version:** " + `${process.version}`)
      .addField("**Bot Developers:** " + "square#1255, speed#5496");
       msg.channel.send("**/" + msg.guild + "/" + msg.channel.name + "/**")
       msg.channel.send(bembed);
    }

module.exports.help = {
    name: "botinfo"
}
  