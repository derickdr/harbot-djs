const { REST, Routes } = require('discord.js');
const { clientId, testServerId, harstemServerId, mosqueServerId, monkeyServerId, token } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');

//Indices of the applicable commands
const harstemCommands = [];
const testCommands = [];
const mosqueCommands = [];
const monkeyCommands = [];

const commandsPath = path.join(__dirname,'..','..', 'commands');
const commandsFiles = fs.readdirSync(commandsPath);
for(const file of commandsFiles){
    const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		switch(file){
			case 'idiot.js':
				harstemCommands.push(command.data.toJSON());
				monkeyCommands.push(command.data.toJSON());
				testCommands.push(command.data.toJSON());
				//mosqueCommands.push(command);
				break;
			case 'unidiot.js':
				harstemCommands.push(command.data.toJSON());
				monkeyCommands.push(command.data.toJSON());
				testCommands.push(command.data.toJSON());
				break;
			case 'stare.js':
				harstemCommands.push(command.data.toJSON());
				monkeyCommands.push(command.data.toJSON());
				testCommands.push(command.data.toJSON());
				mosqueCommands.push(command.data.toJSON());
				break;
			case 'pasta.js':
				harstemCommands.push(command.data.toJSON());
				monkeyCommands.push(command.data.toJSON());
				testCommands.push(command.data.toJSON());
				mosqueCommands.push(command.data.toJSON());
				break;
		}
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${harstemCommands.length} application (/) commands for the Harstem server.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		await rest.put(
			Routes.applicationGuildCommands(clientId, harstemServerId),
			{ body: harstemCommands }
		);
		console.log(`Started refreshing ${monkeyCommands.length} application (/) commands for the Harstem server.`);
		await rest.put(
			Routes.applicationGuildCommands(clientId, monkeyServerId),
			{ body: monkeyCommands }
		);
		console.log(`Started refreshing ${mosqueCommands.length} application (/) commands for the Harstem server.`);
		await rest.put(
			Routes.applicationGuildCommands(clientId, mosqueServerId),
			{ body: mosqueCommands }
		);
		console.log(`Started refreshing ${testCommands.length} application (/) commands for the Harstem server.`);
		await rest.put(
			Routes.applicationGuildCommands(clientId, testServerId),
			{ body: testCommands }
		);
		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();