"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var timeStamp, latency, usdVal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (interaction.user.bot)
                    return [2 /*return*/];
                if (!interaction.isChatInputCommand())
                    return [2 /*return*/];
                console.log(interaction);
                if (!(interaction.commandName === 'ping')) return [3 /*break*/, 2];
                timeStamp = interaction.createdTimestamp;
                latency = Date.now() - timeStamp;
                return [4 /*yield*/, interaction.reply("Latency is ".concat(latency, "ms."))];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                if (!(interaction.commandName === 'usd2ars')) return [3 /*break*/, 4];
                usdVal = interaction.options.getNumber('usdval');
                console.log(usdVal);
                return [4 /*yield*/, interaction.reply("I'm thinking")];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
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
