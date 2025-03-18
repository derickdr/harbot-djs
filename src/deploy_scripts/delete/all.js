const { REST, Routes } = require('discord.js');
const { clientId,
	    testServerId,
		mosqueServerId,
	    harstemServerId,
		monkeyServerId,
		token } = require('../../config.json');

const rest = new REST().setToken(token);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
/*
// for test server
rest.put(Routes.applicationGuildCommands(clientId, testServerId), { body: [] })
	.then(() => console.log('Successfully deleted all test server commands.'))
	.catch(console.error);

// for harstem server
rest.put(Routes.applicationGuildCommands(clientId, harstemServerId), { body: [] })
	.then(() => console.log('Successfully deleted all harstem server commands.'))
	.catch(console.error);

// for monkey server
rest.put(Routes.applicationGuildCommands(clientId, monkeyServerId), { body: [] })
	.then(() => console.log('Successfully deleted all monkey server commands.'))
	.catch(console.error);
	
// for mosque server
rest.put(Routes.applicationGuildCommands(clientId, mosqueServerId), { body: [] })
	.then(() => console.log('Successfully deleted all mosque server commands.'))
	.catch(console.error);
	*/