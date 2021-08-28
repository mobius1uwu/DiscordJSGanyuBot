const { Client, Intents } = require('discord.js');
const config = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log(`${client.user.tag} has been logged in!`);
});

client.login(process.env.TOKEN);