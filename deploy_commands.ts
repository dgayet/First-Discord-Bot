// deploy commands file

const {REST, SlashCommandBuilder, Routes} = require('discord.js');
const {APP_ID, SERVER_ID, BOT_TOKEN} = require('./config.json');

// array with commands
const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with latency'),
	new SlashCommandBuilder()
        .setName('usd2ars')
        .setDescription('Replies with equivalent ARS value of (USD) argument passed')
        .addNumberOption(option => option.setName('usdval')
            .setDescription('The USD value tu convert')
            .setRequired(true)),
	new SlashCommandBuilder()
        .setName('ars2usd')
        .setDescription('Replies with equivalent USD value of (ARS) argument passed')
        .addNumberOption(option => option.setName('arsval')
            .setDescription('The ARS value tu convert')
            .setRequired(true)),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(APP_ID, SERVER_ID), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);
