const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    if (args.includes("kick")) {
        message.channel.send("**Kick:** A command that kicks an user. Usage: >_kick (user)")
    } else {
    if (args.includes("ban")) {
        message.channel.send("**Ban:** A command that bans an user. Usage: >ban (user) (reason)")
    } else {
    if (args.includes("mute")) {
        message.channel.send("**Mute:** A command that mutes an user from typing. Usage: >mute (user) (time)")
    } else {
    if (args.includes("blind")) {
        message.channel.send("**Blind:** A command that blinds an user from typing or seeing future messages. Usage: >blind (user) (time)")
    } else {
    if (args.includes("addrole")) {
        message.channel.send("**Addrole:** A command that adds a role to an user. Usage: >_addrole (user) (role name)")
    } else {
    if (args.includes("developers")) {
        message.channel.send("**Developers:** Displays the bot owners/developers")
    } else {
    if (args.includes("removerole")) {
        message.channel.send("**Removerole:** A command that removes a role from an user. Usage: >removerole (user) (rolename)")
    } else {
        let serverembed = new Discord.RichEmbed()
        .setColor(Math.floor(Math.random() * 16777214) + 1)
        .setTitle("Commands:")
        .setDescription("Terminal: A moderation bot. Do >_help (command) to get more info.")
        .addField("Punishment:", "`>_kick`, `>_ban`, `>_mute`, `>_blind`")
        .addField("Roles:", "`>_addrole`, `>_removerole`")
        .addfield("General", "`>_developers`");
     message.channel.send(serverembed);
}}}}}}
    
};

module.exports.help = {
    name: "help"
};
