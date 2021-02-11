module.exports = (client) => {
    console.log(`Ready as ${client.user.tag}`);
    client.user.setActivity(client.config.statusActivity, { type: client.config.statusType})
};