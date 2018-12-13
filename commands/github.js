const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "https://github.com/squareGITHUB/terminal");
}
module.exports.help = {
    name: "github"
};