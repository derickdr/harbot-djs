/*

function idiot(invokingMember, targetMember) {
    let permission = invokingMember.member.guild.roles.get('admin')
    if (!permission) {
        return 'Not an idiot smasher, idiot.'
    } else {
        targetMember.addRole('idiot')
        return 'idiot.' -> in #idiots-only
    }
}

function unidiot(invokingMember, targetMember) { 
}

function stare(member, message) { 
}

*/

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);