const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    if (args.includes("kick")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Kick:** A command that kicks an user. Usage: >_kick (user)")
    } else {
    if (args.includes("ban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Ban:** A command that bans an user. Usage: >_ban (user) (reason)")
    } else {
    if (args.includes("purge")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Purge:** A command that purges messages. Usage: >_purge (interger)")
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
    if (args.includes("censor")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Censor:** A command that censors a certain word. Usage: >_censor (word)")
    } else {
     if (args.includes("developers")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Developers:** A command that shows the developers and owners of Terminal. Usage: >_developers")
    } else {
     if (args.includes("help")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Help:** A command that lists commands. Usage: >_help")
    } else {
     if (args.includes("uptime")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Uptime:** A command that shows the bot uptime. Usage: >_uptime")
    } else {
     if (args.includes("autorole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Autorole:** A command which toggles autorole for the server. Usage: >_autorole (role name)")
    } else {
     if (args.includes("autorole")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "*Invites:** A command which blocks/allows invites to be advertised. Usage: >_invites (block)/>_invites")
    } else {
        let serverembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setAuthor('Terminal Panel')
        .setTitle("Commands:")
        .setDescription("Terminal: A moderation bot. Do >_help (command) to get more info.")
        .addField("Punishment:", "`>_kick`, `>_ban`, `>_softban`, `>_mute`, `>_blind`")
        .addField("Roles:", "`>_addrole`, `>_removerole`, `>_autorole`")
        .addField("Messages:", "`>_censor`, `>_purge`, `>_invites`")
        .addField("Other:", "`>_developers`, `>_help`, `>_uptime`");
     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
     message.channel.send(serverembed);
}}}}}}}}}}}}
    
};
module.exports.help = {
    name: "help"
};
