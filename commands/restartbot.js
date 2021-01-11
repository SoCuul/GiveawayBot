exports.run = async (client, message, args) => {

    if(message.author.id == client.config.ownerID){
        console.log(client.config.botName + ` is restarting...`);
        message.channel.send(client.config.botName + ' is restarting...').then(sentMessage =>  process.exit(0))
    }

};
