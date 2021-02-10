const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.roles.cache.some((r) => r.name === client.config.giveawayRole)){
        return message.channel.send(`:x: You need to have the ${client.config.giveawayRole} role to do that.`);
    }

    if(!args[0]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("✅ Giveaway deleted!");
        }).catch((err) => {
            message.channel.send(":x: No giveaway found for \`${messageID}\`, please check you have the right message and try again.");
        });

};
