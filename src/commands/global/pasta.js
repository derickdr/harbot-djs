const {SlashCommandBuilder} = require('discord.js');
const copypastaList = require('../../copypastas.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pasta')
		.setDescription('Post the selected copypasta')
		.addStringOption(option =>
			{ 
			option.setName("pasta");
			option.setDescription("Select which copypasta you want specifically");
			option.setRequired(true);
			for(i in copypastaList)
				option.addChoices({name: copypastaList[i].title, value: i});
			return option;
			}
		),
	async execute(interaction) {
        const selectedOption = interaction.options.getString('pasta');
		await interaction.reply(copypastaList[selectedOption].text);
	},
};