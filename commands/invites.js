const fs = require("fs");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have sufficient permissions to block invites.");
	let invite = JSON.parse(fs.readFileSync("./invites.json", "utf8"));
	if (!args[0]) { 
		invite[message.guild.id] = {
			block: 0
		};
		fs.writeFile("./invites.json", JSON.stringify(invite), (err) => {
			if (err) console.log(err);
		});
		 return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Allowed discord server invites.");
	}
	if (args[0] = "block") { 
		invite[message.guild.id] = {
			block: 1
		};
		fs.writeFile("./invites.json", JSON.stringify(invite), (err) => {
			if (err) console.log(err)
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Blocked discord server invites.`);
	}
}
module.exports.help = {
    name: "invites"
}
