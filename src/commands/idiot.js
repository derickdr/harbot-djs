const {SlashCommandBuilder , MessageFlags} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const {testServerIdiotRole, harstemServerIdiotRole, harstemServerId, testServerId} = require("../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('idiot')
		.setDescription('Send a user to jail')
        .addUserOption(option =>
            option.setName('target')
                  .setDescription('The user to idiot')
                  .setRequired(true))
        .addNumberOption(option =>
            option.setName('time')
                  .setDescription('Time to be spent in idiot channel')),
	async execute(interaction) {
        const idiotRoleId = interaction.guild.id == testServerId ? testServerIdiotRole: harstemServerIdiotRole;
        console.log(`Idiot role id is: ${idiotRoleId}`);
        const target = interaction.options.getMember('target');
        if(!target){
            await interaction.reply({ content: 'User does not exist', flags: MessageFlags.Ephemeral });
            return;
        }
        const timeInMinutes = interaction.options.getNumber('time') ?? 0;
        console.log(`Sending the idiot message to ${target.displayName}...`);
		await interaction.reply(`${target.displayName} you are an IDIOT!`);
        console.log(`Adding the idiot role for ${timeInMinutes}...`);
        await interaction.guild.members.addRole({role: idiotRoleId, user: target});
        if(timeInMinutes>0){
            await wait(timeInMinutes * 60 * 1000);
            await interaction.guild.members.removeRole({role: idiotRoleId, user: target})
        }
	},
};