exports.run = async (client, message, args) => {

    if(message.author.id == client.config.ownerID){
        const Discord = require("discord.js");
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedColor)
        .setTitle('Restarting...')
        .setDescription('This will take a few seconds')

        console.log(client.config.botName + ` is restarting...`);
        message.channel.send(embed).then(sentMessage =>  process.exit(0))
    }

};
