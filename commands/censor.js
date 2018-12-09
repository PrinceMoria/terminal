const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have sufficient permissions to add censorship on words.");
	let censor = JSON.parse(fs.readFileSync("./censor.json", "utf8"));
	if (!args[0]) { 
		censor[message.guild.id] = {
			word: "none"
		};
		fs.writeFile("./censor.json", JSON.stringify(censor), (err) => {
			if (err) console.log(err);
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Cleared all censorship of words.");
	}
	if (args[0]) { 
		let words = args.join(" ");
		censor[message.guild.id] = {
			word: words
		};
		fs.writeFile("./censor.json", JSON.stringify(censor), (err) => {
			if (err) console.log(err)
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Added censorship for that word.`);
	}
}
module.exports.help = {
    name: "censor"
}
