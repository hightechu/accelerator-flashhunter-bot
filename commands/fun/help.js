// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'commands',
    // Description of Command
    description: 'HighTechU Promotion',
    // Aliases
    aliases: ['c'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('Commands You Can Do')
            .setDescription('This is a list of commands you can start with.')
            .addFields(
                { name: '!find-work', value: 'Find work based on your interest' },
                { name: '!find-major', value: 'Find major based on your interest' },
                { name: '!find-volunteer', value: 'Find volunteer based on your interest'},
                { name: '!time', value: 'Manage your time table'},
                { name: '!hello', value: 'Say hi to me'},
            )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};