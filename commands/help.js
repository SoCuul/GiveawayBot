exports.run = async (client, message, args) => {

        const Discord = require("discord.js");
        const tick = '`'
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedColor)
        .setTitle(client.config.botName)
        .setDescription(`${tick}For more help, contact <@${client.config.ownerID}>.`)
        .addFields(
            { name: `\u200b\n${client.config.giveawayEmoji} **Giveaway Commands**', value: "**!gmainstart [duration] [winners] [prize]**: ${tick}Starts a main giveaway${tick}\n**!gstart [channel] [duration] [winners] [prize]**: ${tick}Starts a giveaway${tick}\n**!greroll [message id]**: ${tick}Rerolls a giveaway winner${tick}\n**!geditwinners [message id] [new value]**: ${tick}Changes the giveaway winner amount.${tick}\n**!geditprize [message id] [new value]**: ${tick}Changes the giveaway prize.${tick}\n**!gend [message id]**: ${tick}Ends a giveaway early${tick}\n**!gdelete [message id]**: ${tick}Deletes a giveaway.${tick}\n\u200b` },
            { name: `➡️ **Other Commands**', value: "**!grestartbot**: ${tick}Restarts the bot's process${tick}` },)

        message.channel.send(embed)

};
