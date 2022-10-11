//import { IntegrationApplication, messageLink } from "discord.js";
// import { getRates, Currency, convertCurrencies } from "../web-scrapping-infobae-currency/currency_rates.js"

const {getRates, Currency, convertCurrencies} = require ("./APIs/currency_rates.js");
const {generateQR} = require("./APIs/googleQR.js");
const {Client, GatewayIntentBits} = require('discord.js'); // adds discord.js module
const config = require('./config.json'); // gets file with information about bot token


const client = new Client({intents: [GatewayIntentBits.Guilds,
                                    GatewayIntentBits.GuildMessages,
                                    GatewayIntentBits.MessageContent]}); // creates a discord client (the bot).
                                                                        // the intents specify which websockets the bot will listen to

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
    if (interaction.user.bot) return;
    if (!interaction.isChatInputCommand()) return;
	//console.log(interaction);

    if (interaction.commandName === 'ping') {
        let timeStamp = interaction.createdTimestamp;
        let latency = Date.now() - timeStamp;
		await interaction.reply(`Latency is ${latency}ms.`);
    } else if (interaction.commandName === 'usd2ars') {
        const usdVal = interaction.options.getNumber('val');
        console.log(usdVal);
        let values = convertCurrencies(usdVal, getRates(), true);
        let arr_values = await values;
        let string_response = `Valor a convertir: ${usdVal}. \n\n`;
        arr_values.forEach(async (x,i) => {
            string_response += `${x.currency}: ${x.value} \n`;
        });
        console.log(string_response);
        await interaction.reply(string_response);
    } else if (interaction.commandName === 'ars2usd') {
        const arsVal = interaction.options.getNumber('val');
        console.log(arsVal);
        let values = convertCurrencies(arsVal, getRates(), false);
        let arr_values = await values;
        let string_response = `Valor a convertir: ${arsVal}. \n\n`;
        arr_values.forEach(async (x,i) => {
            string_response += `${x.currency}: ${x.value} \n`;
        });
        console.log(string_response);
        await interaction.reply(string_response);
    } else if (interaction.commandName === 'qr') {
        const url = interaction.options.getString('url');
        console.log(url);
        await interaction.reply(generateQR(url, 200, 200, '#990099'));
    }
});



client.login(config.BOT_TOKEN); // this logs in to the discord bot and uses the token in config.json as credentials


// THIS SECTION IS NOW DEPRICATED AS WE HAVE NOW REGISTERED SLASH COMMANDS.
// // Listener of the event "messageCreate"
// // Command handler
// const prefix = '!';

// client.on("messageCreate", function(message) {
//     // console.log('message received');
//     if(message.author.bot) {
//         // console.log("it is a bot");
//         return;
//     } // if the author of the message is a bot, dont do anything
//     // console.log(`message: ${message.content}`)
//     if(!message.content.startsWith(prefix)) {
//         // console.log(`it is not a command, starts with ${message.content.charAt(0)}`);
//         return;
//     } 

//     // parsing of the command
//     const commandBody = message.content.slice(prefix.length);
//     const args = commandBody.split(' ');
//     const command = args.shift().toLowerCase();
//     // console.log(`command is: ${command}`);
//     console.log(message);

//     if (command == 'ping') {
//         const timeTaken = Date.now() - message.createdTimestamp;
//         message.reply(`The message had a latency of ${timeTaken}ms. `);
//     }
// });

