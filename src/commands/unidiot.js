const {SlashCommandBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const {testServerId, testServerIdiotRole, harstemServerId, harstemServerIdiotRole} = require("../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unidiot')
		.setDescription('Free a user from jail')
        .addUserOption(option =>
            option.setName('target')
                  .setDescription('The user to unidiot')),
	async execute(interaction) {
        const idiotRoleId = interaction.guild.id == testServerId ? testServerIdiotRole: harstemServerIdiotRole;
        console.log(`Idiot role id is: ${idiotRoleId} (Unidiot)`);
        const target = interaction.options.getMember('target');
        console.log(`Sending the idiot message to ${target.displayName}...`);
		await interaction.reply(`${target.displayName} you are an IDIOT!`);
        console.log(`Removing the idiot role...`);
        await interaction.guild.members.removeRole({role: idiotRoleId, user: target});
	},
};