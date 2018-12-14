const fs = require("fs");

module.exports.run = async (bot, message, args) => {
if (message.author.id != "372078453236957185") {
	if (message.author.id != "365274392680333329") return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You are not a Terminal developer.")
	if (!args || args.length < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please state a user ID and allow/deny to (un)blacklist someone.")
}
let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
	if (message.content.includes("allow")) { 
		blacklist[args[0]] = {
			person: 0
		};
		fs.writeFile("./blacklist.json", JSON.stringify(blacklist), (err) => {
			if (err) console.log(err);
		});
		return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Gave " + args[0] + " access to Terminal.");
	}
	if (message.content.includes("deny")) { 
		blacklist[args[0]] = {
			person: 1
		};
		fs.writeFile("./blacklist.json", JSON.stringify(blacklist), (err) => {
			if (err) console.log(err)
		});
		return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Denied ` + args[0] + " access to Terminal.");
	}
}
module.exports.help = {
    name: "blacklist"
}
