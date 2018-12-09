const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("/" + message.guild + "/" + message.channel.name + "/" + "You do not have sufficient permissions to unmute members.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " Couldn't find that user.");
  let role = "Muted"
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " The muted role doesn't exist. Please mute someone first before unmuting them.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + ` That person isn't muted.`);
  await(rMember.removeRole(gRole.id));

  try{
    await message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + ` Unmuted ${rMember}.`)
  }catch(e){
  }
}
module.exports.help = {
    name: "unmute"
}