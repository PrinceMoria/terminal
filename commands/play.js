const ytdl = require('ytdl-core');
exports.run = async (client, message, args, ops) => {
    if (!message.member.voiceChannel) return message.channel.send('Please join a VC.');
 
 
    if (!args[0]) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + 'Please supply an URL to play.');
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "That URL is invalid. Please try another one.");
 
    let info = await  ytdl.getInfo(args[0]);
 
    let connection = await message.member.voiceChannel.join();
    
    let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly'}));
    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Now playing: ${info.title}`);
}
module.exports.help = {
    name: "play"
}
