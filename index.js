"use strict";
exports.__esModule = true;
var _a = require('discord.js'), Client = _a.Client, GatewayIntentBits = _a.GatewayIntentBits; // adds discord.js module
var config = require('./config.json'); // gets file with information about bot token
console.log("hola");
var client = new Client({ intents: [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent] }); // creates a discord client (the bot).
// the intents specify which websockets the bot will listen to
// When the client is ready, run this code (only once)
client.once('ready', function () {
    console.log('Ready!');
});
// Listener of the event "messageCreate"
// Command handler
var prefix = '!';
client.on("messageCreate", function (message) {
    // console.log('message received');
    if (message.author.bot) {
        // console.log("it is a bot");
        return;
    } // if the author of the message is a bot, dont do anything
    // console.log(`message: ${message.content}`)
    if (!message.content.startsWith(prefix)) {
        // console.log(`it is not a command, starts with ${message.content.charAt(0)}`);
        return;
    }
    // parsing of the command
    var commandBody = message.content.slice(prefix.length);
    var args = commandBody.split(' ');
    var command = args.shift().toLowerCase();
    // console.log(`command is: ${command}`);
    console.log(message);
    if (command == 'ping') {
        var timeTaken = Date.now() - message.createdTimestamp;
        message.reply("The message had a latency of ".concat(timeTaken, "ms. "));
    }
});
client.login(config.BOT_TOKEN); // this logs in to the discord bot and uses the token in config.json as credentials
