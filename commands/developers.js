const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.channel.send("The developers of Terminal are: `square#1255`, and `speed#5496`");
};

module.exports.help = {
    name: "developers"
};