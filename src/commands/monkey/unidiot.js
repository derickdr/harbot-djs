const {SlashCommandBuilder,MessageFlags} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const {monkeyServerIdiotRole} = require("../../config.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unidiot')
		.setDescription('Free a user from jail')
        .addUserOption(option =>
            option.setName('target')
                  .setDescription('The user to unidiot')
                  .setRequired(true)),
	async execute(interaction) {
        //Check which server it is and assign the appropriate idiot role ID
//--------------------CHANGE IDIOT ROLE ID HERE-----------------------------
        const idiotRoleId = monkeyServerIdiotRole;
//--------------------------------------------------------------------------
        console.log(`Idiot role id is: ${idiotRoleId} (Unidiot)`);
        //Target for unidioting
        const target = interaction.options.getMember('target');
        if(!target){
            await interaction.reply({ content: 'User does not exist', flags: MessageFlags.Ephemeral });
            return;
        }
        if(!interaction.member.permissions.has("268435456")){
            await interaction.reply({ content: 'yo broke ass aint got permission', flags: MessageFlags.Ephemeral });
            return;
        }
        console.log(`Sending the idiot message to ${target.displayName}...`);
        console.log(`Removing the idiot role...`);
        await interaction.guild.members.removeRole({role: idiotRoleId, user: target});
        await interaction.reply({ content: 'Successfully unidioted the selected user', flags: MessageFlags.Ephemeral });
	},
};