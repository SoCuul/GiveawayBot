exports.run = async (client, message, args) => {

    const Discord = require("discord.js");
    const tick = '`'
    const embed = new Discord.MessageEmbed()
    .setColor(client.config.embedColor)
    .setTitle(client.config.botName)
    .setDescription(`For more help, contact <@${client.config.ownerID}>\n\n${client.config.giveawayEmoji} **Commands**\n**${client.config.prefix}mainstart [duration] [winners] [prize]**: ${tick}Starts a main giveaway${tick}\n**${client.config.prefix}start [channel] [duration] [winners] [prize]**: ${tick}Starts a giveaway${tick}\n**${client.config.prefix}reroll [message id]**: ${tick}Rerolls a giveaway winner${tick}\n**${client.config.prefix}editwinners [message id] [new value]**: ${tick}Changes the giveaway winner amount.${tick}\n**${client.config.prefix}editprize [message id] [new value]**: ${tick}Changes the giveaway prize.${tick}\n**${client.config.prefix}end [message id]**: ${tick}Ends a giveaway early${tick}\n**${client.config.prefix}delete [message id]**: ${tick}Deletes a giveaway.${tick}`)

    message.channel.send(embed)

};