const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	if (message.author.id != "372078453236957185") {
		if (message.author.id != "365274392680333329") {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have sufficient permissions to change Terminal's prefix.");
	}}
	let prefix = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
	if (!args[0]) { 
		prefix[message.guild.id] = {
			prefix: ">_"
		};
		fs.writeFile("./prefix.json", JSON.stringify(prefix), (err) => {
			if (err) console.log(err);
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Reset the server prefix to: `>_`.");
	}
	if (args[0]) { 
		let words = args.join(" ");
		prefix[message.guild.id] = {
			prefix: words
		};
		fs.writeFile("./prefix.json", JSON.stringify(prefix), (err) => {
			if (err) console.log(err)
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Changed the server prefix to: `" + args + "`.");
	}
}
module.exports.help = {
    name: "prefix"
}
	
