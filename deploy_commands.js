// deploy commands file
var _a = require('discord.js'), REST = _a.REST, SlashCommandBuilder = _a.SlashCommandBuilder, Routes = _a.Routes;
var _b = require('./config.json'), APP_ID = _b.APP_ID, SERVER_ID = _b.SERVER_ID, BOT_TOKEN = _b.BOT_TOKEN;
// array with commands
var commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with latency'),
    new SlashCommandBuilder()
        .setName('usd2ars')
        .setDescription('Replies with equivalent ARS value of (USD) argument passed')
        .addNumberOption(function (option) { return option.setName('val')
        .setDescription('The USD value tu convert')
        .setRequired(true); }),
    new SlashCommandBuilder()
        .setName('ars2usd')
        .setDescription('Replies with equivalent USD value of (ARS) argument passed')
        .addNumberOption(function (option) { return option.setName('val')
        .setDescription('The ARS value tu convert')
        .setRequired(true); }),
]
    .map(function (command) { return command.toJSON(); });
var rest = new REST({ version: '10' }).setToken(BOT_TOKEN);
rest.put(Routes.applicationGuildCommands(APP_ID, SERVER_ID), { body: commands })
    .then(function (data) { return console.log("Successfully registered ".concat(data.length, " application commands.")); })["catch"](console.error);
