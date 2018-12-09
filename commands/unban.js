module.exports.run = (client, message, args) => {
  const user = args[0];
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You may not use this command. Invalid permissions. ");
  if (!user) return message.channel.send('Please supply an id for me to unban').catch(console.error);
  message.guild.unban(user);
  message.channel.send(`Unbanned ${user}`)
}
module.exports.help = {
    name: "unban"
}