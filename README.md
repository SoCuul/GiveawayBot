# GiveawayBot
GiveawayBot is a simple and customizable self-hosted giveaway bot.
It utilizes [discord-giveaways](https://github.com/Androz2091/discord-giveaways) to create and manage the giveaways.

# How to download
You should always use the latest version of the bot. You can get the download the latest source code by [clicking this link](https://github.com/SoCuul/GiveawayBot/releases/latest).

# Setup
## Prerequisites
First install [node.js](https://nodejs.org/en/download/).
Before configuring the bot, you must install the npm packages. Download them manually, or run `npm install`.

* discord.js
* discord-giveaways
* ms

### Configuration (config.json)
You must first create a file named `config.json`. This is the way to configure the bot.
Here's how to configure it (Please replace the tutorial values with your own):
```json
{
    "token": "This is where you put your bot token",
    "giveawayRole": "Please enter the role name that is needed to create/manage giveaways",
    "ownerID": "Please enter the ID of the bot owner (this user can restart the bot)",

    "everyoneMention": false,
    "hostedBy": true,
    "botsCanWin": false,

    "prefix": "Enter the prefix that will be used for the commands",

    "embedColor": "Please enter the color that will be used for giveaway embeds and the help menu (HEX or HTML colors only)",
    "embedColorEnd": "Please enter the color that will be used for ended giveaways (HEX or HTML colors only)",
    "reaction": "Please enter the unicode emoji or the custom emoji id that will be used to join the giveaway",
    "giveawayEmoji": "Please enter the unicode emoji or the custom emoji code that will be used in messages",

    "botName": "Please enter the name of the bot (this will be shown in the help menu)",
    "statusType": "Please enter either PLAYING, WATCHING or LISTENING in all caps",
    "statusActivity": "Please enter the message to be shown after the status type"
}
```

## Running the bot
Run start.bat or start.sh (depending what platform you're on) and the bot should start up! (Note for using the start.sh script, before running it, do `chmod +x start.sh` and then run it with `./start.sh`)

# Commands
* `help` Shows the command list and info about the bot.
* `create` Creates a giveaway using the interactive wizard.
* `start [channel] [duration] [winners] [prize]` Manually starts a giveaway.
* `list` Lists the current giveaways.
* `reroll [message id]` Rerolls a giveaway winner.
* `edit [message id] [prize/winners] [new value]` Edits an ongoing giveaway.
* `end [message id]` Ends a giveaway early.
* `delete [message id]` Deletes the giveaway message and removes it from the database.
* `restartbot` Restarts the bot.

# Support
### Join my Discord Server for help with the bot.

<a href="https://discord.gg/AY7WHt4Nrw"><img src="https://discordapp.com/api/guilds/774121617240358932/widget.png?style=banner2"></a>
