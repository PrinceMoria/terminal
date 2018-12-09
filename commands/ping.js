const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    message.channel.send("Pinging...").then((message)=>{
    message.edit("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Pinged! // \`${client.pings[0]}ms\``);
    })
};

module.exports.help = {
    name: "ping"
};