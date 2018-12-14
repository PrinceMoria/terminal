module.exports.run = async (bot, message, args, client) => {
	if (message.author.id !== "372078453236957185")
    if (message.author.id !== "365274392680333329") return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You are not a Terminal developer.")
    try {
    console.log("Shutdown successfully.")
		bot.destroy();
    process.exit();
  } catch (e) {
    mesage.channel.send(`${client.clean(err)}`)
  }
}
module.exports.help = {
    name: "shutdown"
}