const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const fs = require("fs");

client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("no commands to load");

  console.log(`loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`The command ${f} has loaded.`);
    client.commands.set(props.help.name, props);
  });
});

client.on('ready', () => {
  client.user.setActivity("your commands", { type: 'WATCHING' })
  console.log(`Terminal booted up sucessfully.`);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.author.send("**/" + message.author.username + "/DM** \n Sorry, but commands in my DMs have been disabled. Please try it in a server." )

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(client, message, args);
});

client.login(config.token);
