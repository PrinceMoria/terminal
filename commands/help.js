const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let help = message.content.slice(prefix.length).trim().split(" ");
    if (message.author.bot) return;
    if (!help) {
    let serverembed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("Commands:")
    .setDescription("Terminal: A moderation bot. Do >_help (command) to get more info.")
    .addField("Punishment:", "`>_kick`, `>_ban`, `>_mute`, `>_blind`")
    .addField("Roles:", "`>_addrole`, `>_removerole`");
    return message.channel.send(serverembed);
    }
    if (help.includes("kick")) {
        message.channel.send("**Kick:** A command that kicks an user. Usage: >_kick (user)")
    } else {
    if (help.includes("ban")) {
        message.channel.send("**Ban:** A command that bans an user. Usage: >ban (user) (reason)")
    } else {
    if (help.includes("mute")) {
        message.channel.send("**Mute:** A command that mutes an user from typing. Usage: >mute (user) (time)")
    } else {
    if (help.includes("blind")) {
        message.channel.send("**Blind:** A command that blinds an user from typing or seeing future messages. Usage: >blind (user) (time)")
    } else {
    if (help.includes("addrole")) {
        message.channel.send("**Addrole:** A command that adds a role to an user. Usage: >_addrole (user) (role name)")
    } else {
    if (help.includes("removerole")) {
        message.channel.send("**Removerole:** A command that removes a role from an user. Usage: >removerole (user) (rolename)")
    } else {
        if (help) {
message.channel.send("That isn't a command.")
}}}}}}}

};

module.exports.help = {
    name: "help"
};