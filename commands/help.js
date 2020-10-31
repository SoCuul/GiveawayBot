exports.run = async (client, message, args) => {

        const Discord = require("discord.js");
        const embed = new Discord.MessageEmbed()
        .setColor(client.config.embedColor)
        .setTitle(client.config.botName)
        .setDescription(`For more help, contact <@${client.config.ownerID}>.`)
        .addFields(
            { name: '\u200b\n<a:Giveaway:764552166576095232> **Giveaway Commands**', value: "**!gmainstart [duration] [winners] [prize]**: `Starts a main giveaway`\n**!gstart [channel] [duration] [winners] [prize]**: `Starts a giveaway`\n**!greroll [message id]**: `Rerolls a giveaway winner`\n**!geditwinners [message id] [new value]**: `Changes the giveaway winner amount.`\n**!geditprize [message id] [new value]**: `Changes the giveaway prize.`\n**!gend [message id]**: `Ends a giveaway early`\n**!gdelete [message id]**: `Deletes a giveaway.`\n\u200b" },
            { name: '➡️ **Other Commands**', value: "**!grestartbot**: `Restarts the bot's process`" },)

        message.channel.send(embed)

};
