const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let serverembed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("Commands")
    .setDescription("Help")
    .addField("Moderation", "`>_kick, >_ban, >_addrole, >_removerole, >_mute, >_blind,`");
    return message.channel.send(serverembed);
};

module.exports.help = {
    name: "help"
};