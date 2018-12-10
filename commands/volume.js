exports.run = async (client, message) => {

    if (!message.member.voiceChannel) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " +  "You're not in a VC, please join one.")
    if(!message.member.voiceChannel.joinable) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "I don't have permissions to join this vc");

    let args = message.content.split(" ");

    if (parseInt(args[1]) > 200) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Volume at it's maximum");

    message.guild.voiceConnection.player.dispatcher.setVolume((parseInt(args[1]) / 200));

    message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Volume set to **${parseInt(args[1])}/200**.`);

}