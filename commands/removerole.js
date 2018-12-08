const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: You do not have sufficient permissions to purge messages.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(":x: Couldn't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send(":x: Please supply a role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send(":x: That role doesn't exist, if it does exist: check your spelling");

  if(!rMember.roles.has(gRole.id)) return message.reply(`:x: That person hasn't got that role.`);
  await(rMember.removeRole(gRole.id));

  try{
    await message.channel.send(`:white_check_mark: Removed ${rMember} from ${gRole.name}.`)
  }catch(e){
  }
}
module.exports.help = {
    name: "removerole"
}