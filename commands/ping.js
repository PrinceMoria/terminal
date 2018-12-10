const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let pings = ["Loading...", "Waiting...", "Pinging...", "Doing a thing...", "Debugging...", "Shopping...", "Coding...", "Changing language...", "Doing nothing...", "Doing something...", "Doing things...", ":ok_hand:...", "Alright...", "Uh...", "404..."]
    var ping = pings[Math.floor(Math.random() * pings.length)];
    message.channel.send(ping).then((message)=>{
    message.edit("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Pinged! // \`${client.pings[0]}ms\``);
    })
};

module.exports.help = {
    name: "ping"
};