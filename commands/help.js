const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (args.includes("kick")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Kick:** A command that kicks an user. Usage: >_kick (user)")
    } else {
    if (args.includes("ban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Ban:** A command that bans an user. Usage: >_ban (user) (reason)")
    } else {
    if (args.includes("softban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Softban:** A command that bans and unbans a user. This is used to kick a player but also delete their messages. Usage: >_softban (user) (reason)")
    } else {
    if (args.includes("mute")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Mute:** A command that mutes an user from typing. Usage: >_mute (user) (time)")
    } else {
    if (args.includes("blind")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Blind:** A command that blinds an user from typing or seeing future messages. Usage: >_blind (user) (time)")
    } else {
    if (args.includes("addrole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Addrole:** A command that adds a role to an user. Usage: >_addrole (user) (role name)")
    } else {
    if (args.includes("removerole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Removerole:** A command that removes a role from an user. Usage: >_removerole (user) (rolename)")
    } else {
     if (args.includes("developers")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Developers:** A command that shows the developers and owners of Terminal. Usage: >_developers")
    } else {
        let serverembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setAuthor('Terminal Panel')
        .setTitle("Commands:")
        .setDescription("Terminal: A moderation bot. Do >_help (command) to get more info.")
        .addField("Punishment:", "`>_kick`, `>_ban`, `>_softban`, `>_mute`, `>_blind`")
        .addField("Roles:", "`>_addrole`, `>_removerole`")
        .addField("Other:", "`>_developers`, `>_help`");
     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
     message.channel.send(serverembed);
}}}}}}}}
    
};
module.exports.help = {
    name: "help"
};
