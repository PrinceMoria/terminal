const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    message.author.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "https://discordapp.com/oauth2/authorize?&client_id=521023036812558356&scope=bot&permissions=8");
}
module.exports.help = {
    name: "invite"
};