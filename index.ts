import { messageLink } from "discord.js";

const {Client, GatewayIntentBits} = require('discord.js'); // adds discord.js module
const config = require('./config.json'); // gets file with information about bot token

console.log("hola");
const client = new Client({intents: [GatewayIntentBits.Guilds,
                                    GatewayIntentBits.GuildMessages,
                                    GatewayIntentBits.MessageContent]}); // creates a discord client (the bot).
                                                                        // the intents specify which websockets the bot will listen to

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


// Listener of the event "messageCreate"
// Command handler
const prefix = '!';

client.on("messageCreate", function(message) {
    // console.log('message received');
    if(message.author.bot) {
        // console.log("it is a bot");
        return;
    } // if the author of the message is a bot, dont do anything
    // console.log(`message: ${message.content}`)
    if(!message.content.startsWith(prefix)) {
        // console.log(`it is not a command, starts with ${message.content.charAt(0)}`);
        return;
    } 

    // parsing of the command
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    // console.log(`command is: ${command}`);
    console.log(message);

    if (command == 'ping') {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`The message had a latency of ${timeTaken}ms. `);
    }
});



client.login(config.BOT_TOKEN); // this logs in to the discord bot and uses the token in config.json as credentials