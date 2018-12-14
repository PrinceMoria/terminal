module.exports.run = (client, message, args, ops) => {
    if (args.length  < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please supply a server ID.");
    if (message.author.id !== "372078453236957185")
    if (message.author.id !== "365274392680333329") return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You are not a Terminal developer.")
   client.guilds.get(args.join(" ")).leave()
   .then(g => message.channel.send(("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Left ${g} successfully`)) .catch(console.error)); 
    }
	module.exports.help = {
    name: "gleave"
}
