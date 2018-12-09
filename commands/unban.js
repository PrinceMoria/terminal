module.exports.run = (client, message, args) => {
  const user = args[0];
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + " You do not have sufficient permissions to unban users.");
  if (!user) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + 'Please supply an ID for me to unban.').catch(console.error);
  message.guild.unban(user);
  message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Unbanned ${user}.`)
}
module.exports.help = {
    name: "unban"
}