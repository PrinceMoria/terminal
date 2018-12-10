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
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Softban:** A command that bans and unbans a user. This is used to kick an user but also delete their messages. Usage: >_softban (user) (reason)")
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
     if (args.includes("invites")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Invites:** A command which blocks/allows invites to be advertised. Usage: >_invites (block)/>_invites")
    } else {
     if (args.includes("unban")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Unban:** A command which unbans an user. Usage: >_unban (user)")
    } else {
     if (args.includes("unmute")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Unmute:** A command which unmutes an user. Usage: >_unmute (user)")
    } else {
     if (args.includes("ping")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Ping:** A command which shows the bot's ping. Usage: >_ping")
    } else {
    if (args.includes("join")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Join:** A command which makes Terminal join a VC. Usage: >_join")
    } else {
    if (args.includes("play")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Play:** A command which makes Terminal play an URL. Usage: >_play (URL)")
    } else {
    if (args.includes("leave")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Leave:** A command which makes Terminal leave a VC. Usage: >_leave")
    } else {
    if (args.includes("lockdown")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Lockdown:** A command which locks down a channel, preventing anyone but admins to speak. Usage: >_lockdown lock/>_lockdown")
    } else {
    if (args.includes("prefix")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Prefix:** A command which changes the bot's prefix. Example: *'Hey Bot_'* would make *'Hey Bot_help'*. Usage: >_prefix (prefix)")
    } else {
    if (args.includes("announce")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Announce:** A command which announces a message in a specific channel. Usage: >_announce (channel) (message)")
    } else {
    if (args.includes("poll")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Poll:** A command which creates a poll. Usage: >_poll (question)")
    } else {
    if (args.includes("timer")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Timer:** A command which creates a timer for seconds/minutes/days/months/years. Usage: >_timer (time)")
    } else {
    if (args.includes("pause")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Pause:** A command that pauses the current song playing. Usage: >_pause")
    } else {
    if (args.includes("resume")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Resume:** A command that resumes a song. Usage: >_resume")
    } else {
    if (args.includes("volume")) {
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "**Volume:** A command that changes volume of a video. Usage: >_volume (0/200)")
    } else {
        let serverembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setAuthor('Terminal Panel')
        .setTitle("Commands:")
        .setDescription("Terminal: A moderation bot. Do >_help (command) to get more info.")
        .addField("Punishment:", "`>_kick`, `>_ban`, `>_unban`, `>_softban`, `>_mute`, `>_unmute`, `>_blind`")
        .addField("Roles:", "`>_addrole`, `>_removerole`, `>_autorole`")
        .addField("Messages:", "`>_censor`, `>_lockdown`, `>_purge`, `>_invites`, `>_announce`, `>_poll`")
        .addField("Other:", "`>_developers`, `>_help`, `>_uptime`, `>_ping`, `>_prefix`")
        .addField("Music:", "`>_play`, `>_join`, `>_leave`, `>_pause`, `>_resume`");
     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/**")
     message.channel.send(serverembed);
}}}}}}}}}}}}}}}}}}}}}}}}}}}}
    
};
module.exports.help = {
    name: "help"
};
