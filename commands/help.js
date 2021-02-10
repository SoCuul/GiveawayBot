exports.run = async (client, message, args) => {

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
    .setColor(client.config.embedColor)
    .setTitle(client.config.botName)
    .setDescription(`For more help, contact <@${client.config.ownerID}>\n\n${client.config.giveawayEmoji} **Commands**\n**${client.config.prefix}create**: \`Creates a giveaway using the interactive wizard.\`\n**${client.config.prefix}start [channel] [duration] [winners] [prize]**: \`Manually starts a giveaway.\`\n**${client.config.prefix}list**: \`Lists the current giveaways.\`\n**${client.config.prefix}reroll [message id]**: \`Rerolls a giveaway winner.\`\n**${client.config.prefix}edit [message id] [prize/winners] [new value]**: \`Edits an ongoing giveaway.\`\n**${client.config.prefix}end [message id]**:\` Ends a giveaway early.\`\n**${client.config.prefix}delete [message id]**: \`Deletes a giveaway.\`\n\n`)

    message.channel.send(embed)

};