const {SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const {testServerIdiotRole} = require("../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('idiot')
		.setDescription('Send a user to jail')
        .addUserOption(option =>
            option.setName('target')
                  .setDescription('The user to idiot'))
                /*
        .addNumberOption(option =>
            option.setName('time')
                  .setDescription('Time to be spent in idiot channel'))*/,
	async execute(interaction) {
        console.log(`Idiot role id is: ${testServerIdiotRole}`);
        const target = interaction.options.getMember('target');
        //const time = interaction.options.getNumber('time') ?? 0;
        console.log(`Sending the idiot message to ${target.displayName}...`);
		await interaction.reply(`${target.displayName} you are an IDIOT!`);
        console.log(`Adding the idiot role...`);
        await interaction.guild.members.addRole({role: testServerIdiotRole, user: target});
	},
};