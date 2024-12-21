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
		.setDescription('Stare at the screen with a random animal'),
	async execute(interaction) {
        index = Math.floor(Math.random()*numOfImages);
        randomImage = path.join(imagesPath,imageFiles[index]);
		await interaction.reply({files: [{ attachment: randomImage}]});
	},
};