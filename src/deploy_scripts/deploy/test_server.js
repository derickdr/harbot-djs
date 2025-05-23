const { REST, Routes } = require('discord.js');
const { clientId, testServerId, harstemServerId, mosqueServerId, monkeyServerId, token } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const commandsPath = path.join(__dirname,'..','..', 'commands');
const commandsFiles = ['idiot.js', 'pasta.js','stare.js','unidiot.js'];
for(const file of commandsFiles){
    const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		commands.push(command.data.toJSON());
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}
// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, testServerId),
			{ body: commands }
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();