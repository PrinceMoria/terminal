const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let bembed = new Discord.RichEmbed()
	.setTitle("Bot Information")
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setThumbnail(bicon)
      .addField("Bot member size", bot.users.size)
      .addField("Bot guild size", bot.guilds.size)
      .addField("RAM usage", `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`)
      .addField("Created on", bot.user.createdAt)
      .addField("Created by", "square#1255, speed#5496")
      .addField("Discord version", `${Discord.version}`)
      .addField("Node version", `${process.version}`);

    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")  
    message.channel.send(bembed);
}

module.exports.help = {
  name:"botinfo"
}