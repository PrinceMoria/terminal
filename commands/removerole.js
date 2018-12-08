const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Invalid permissions");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("invalid user, can't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Please supply a role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("`Hmmmm` That role doesn't exist, check your spelling");

  if(!rMember.roles.has(gRole.id)) return message.reply(`${rMember} does not have this role`);
  await(rMember.removeRole(gRole.id));

  try{
    await message.channel.send(`Done removed ${gRole.name} from ${rMember}`)
  }catch(e){
  }
module.exports.help = {
    name: "removerole"
}