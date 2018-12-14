module.exports.run = async (bot, message, args, client) => {
    if (args.length  < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a command to reload.");
	if (message.author.id !== "372078453236957185")
    if (message.author.id !== "365274392680333329") return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You are not a Terminal developer.")
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        console.log(e.stack)
        return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Please manually reload ${args[0]}.`);
    }
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Reloaded ${args[0]}.`);
}
module.exports.help = {
    name: "reload"
}
