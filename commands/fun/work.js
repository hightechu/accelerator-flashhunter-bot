// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'find-work',
    // Description of Command
    description: 'HighTechU Promotion',
    // Aliases
    aliases: ['fw'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('List of work')
            .setURL('https://ca.indeed.com')
            .setDescription('Choose the work that speaks to you.')
            .addFields(
                { name: 'Physician', value: '.' },
                { name: 'Software Developer', value: '.' },
                { name: 'Dentist', value: '.' },
                { name: 'Teacher', value: '.' },
                { name: 'IT manager', value: '.' },

                )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};