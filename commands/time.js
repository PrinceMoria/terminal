module.exports.run = async (client, message, args) => {
     message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n " + " It is currently: `"+new Date()+"`");
};
module.exports.help = {
    name: "time"
};