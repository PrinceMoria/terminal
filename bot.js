const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const fs = require("fs");

const active = new Map();
let ops = 
{
  active: active
}

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

client.on("guildMemberAdd", member => {
    const autoRole = require ("./commands/autorole.js")
    let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
    if (!autorole[member.guild.id]) { 
      autorole[member.guild.id] = {
        autorole: "none"
      };
    }
    var role = autorole[member.guild.id].role;
    if (!role) return;
    member.addRole(role);
  });

client.on('ready', () => {
  client.user.setActivity("your commands", { type: 'WATCHING' })
  console.log(`Terminal booted up sucessfully.`);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.author.send("**/" + message.author.username + "/DM** \n Sorry, but commands in my DMs have been disabled. Please try it in a server." )
  const Censor = require ("./commands/censor.js")
  let censor = JSON.parse(fs.readFileSync("./censor.json", "utf8"));
  if (!censor[message.guild.id]) { 
    censor[message.guild.id] = {
      word: "none"
    };
  }
  if (message.content.includes(censor[message.guild.id].word)) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) return
    message.delete(50)
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot say that word as administrators have blocked it!")
  }
  const Prefix = require ("./commands/prefix.js")
  let prefixjson = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
  if (!prefixjson[message.guild.id]) { 
    prefixjson[message.guild.id] = {
      prefix: ">_"
    };
  }
  let prefix = prefixjson[message.guild.id].prefix

  if (message.content.includes("terminal delete that")) {
    if (message.author.id != "372078453236957185") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return 
    }
    message.channel.bulkDelete(2);
  }
  const Lockdown = require ("./commands/lockdown.js")
  let lockdown = JSON.parse(fs.readFileSync("./lockdown.json", "utf8"));
  if (!lockdown[message.guild.id]) { 
    lockdown[message.guild.id] = {
      lock: "none"
    };
  }
  if (message.channel.id === (lockdown[message.guild.id].lock)) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) return
    if (message.author.id === ["521023036812558356" || "365274392680333329" || "372078453236957185"]) return
    message.delete()
  }
  const PG = require ("./commands/lockdown.js")
  let pg = JSON.parse(fs.readFileSync("./lockdown.json", "utf8"));
  if (!pg[message.guild.id]) { 
    pg[message.guild.id] = {
      mode: "no"
    };
  }
  if (pg[message.guild.id].mode === "yes") {
    // This contains swears! Please skip if you are PG friendly.
    if (message.content.includes("fuck")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("shit")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("nigg")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("asshole")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("negro")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("bastard")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("bitch")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("pedophile")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("sex")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("crap")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("cunt")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("frick")) {
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You're on thin ice, " + message.author + ".")
    }
    if (message.content.includes("heck")) {
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "You're on thin ice, " + message.author + ".")
    }
    if (message.content.includes("whore")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
    }
    if (message.content.includes("twat")) {
      message.delete()
      message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please don't swear," + message.author + " this server is in PG mode.")
  }
}
  const Invites = require ("./commands/invites.js")
  let invites = JSON.parse(fs.readFileSync("./invites.json", "utf8"));
  if (!invites[message.guild.id]) { 
    invites[message.guild.id] = {
      block: 0
    };
  }
  if (invites[message.guild.id].block === 1) {
    if (message.content.includes("discord.gg")) {
    message.delete()
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Sorry, " + message.author + ", you cannot post discord server invites as administrators have blocked it!")
  }}
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(client, message, args);
});

client.login(config.token);
