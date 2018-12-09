const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (args.includes("@everyone")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + 'Error.');
    if (args.includes("@here")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + 'Error.');
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " You do not have sufficient permissions to mute members.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Couldn't find user.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "The user you are trying to mute is either the same, or higher ranking than you.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please specify a time.");

    await (tomute.addRole(muterole.id));
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function() {
        let role = "Muted"
        let gRole = message.guild.roles.find(`name`, role)
        if(!tomute.roles.has(gRole.id)) return 
        tomute.removeRole(muterole.id);
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `<@${tomute.id}> has been unmuted.`);
    }, ms(mutetime));

}

module.exports.help = {
    name: "mute",
}