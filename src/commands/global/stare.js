const {SlashCommandBuilder} = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const currDir = __dirname;
const imagesPath = path.join(currDir,'..','images');
const imageFiles = fs.readdirSync(imagesPath);
const numOfImages = imageFiles.length;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stare')
		.setDescription('Stare at the screen with a random animal')
		.addStringOption(option =>
			{ 
			option.setName("image");
			option.setDescription("Select a specific image of a staring animal (do not fill for random");
			for(image of imageFiles)
				option.addChoices({name: image, value: image});
			return option;
			}
		),
	async execute(interaction) {
        const index = Math.floor(Math.random()*numOfImages);
        const selectedOption = interaction.options.getString("image");
		const image = selectedOption ? //Check if an option has been selected
					  path.join(imagesPath, selectedOption): //Select chosen image if true
					  path.join(imagesPath, imageFiles[index]); //Select Random Image if false
		await interaction.reply({files: [{ attachment: image}]});
	},
};