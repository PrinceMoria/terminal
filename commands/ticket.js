const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args || args.length < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please put a report to put in a ticket. It should include: \n Person mention, what they did, time, extra details.")
    if (!message.mentions.users.first()) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please mention the rulebreaker.")
    let reportmsg = args.slice(0).join(" ");
    let report = new Discord.RichEmbed()
    .setAuthor(`Administrator Ticket:`)
    .setDescription(reportmsg)
    .setFooter("Report for user: " + message.mentions.users.first().username)
    .setColor('RANDOM')
    message.delete()
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
    message.channel.send(report)
}
module.exports.help = {
    name: "ticket"
}
