const fs = require("fs");

exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You do not have sufficient permissions to add an autorole.");
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!args[0]) { 
		autorole[message.guild.id] = {
			role: 0
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err);
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "The server autorole has been turned off.");
	}
	if (args[0]) { 
		let roles = args.join(" ");
		let role = message.guild.roles.find("name", roles);
		autorole[message.guild.id] = {
			role: role.id 
		};
		fs.writeFile("./autorole.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err)
		});
		message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `The server autorole has been set to **${role.name}**`);
	}
}
module.exports.help = {
    name: "autorole"
}