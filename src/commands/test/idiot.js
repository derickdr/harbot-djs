const {SlashCommandBuilder , MessageFlags} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const {testServerIdiotRole} = require("../../config.json");

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
//-----------------CHANGE ROLE ID HERE------------------------
        const idiotRoleId = testServerIdiotRole;
//------------------------------------------------------------
        console.log(`Idiot role id is: ${idiotRoleId}`);
        const target = interaction.options.getMember('target');
        if(!target){
            await interaction.reply({ content: 'User does not exist', flags: MessageFlags.Ephemeral });
            return;
        }
        if(!interaction.member.permissions.has("268435456")){
            await interaction.reply({ content: 'yo broke ass aint got permission', flags: MessageFlags.Ephemeral });
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