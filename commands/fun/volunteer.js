// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'find-volunteer',
    // Description of Command
    description: 'HighTechU Promotion',
    // Aliases
    aliases: ['fv'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('List of volunteers')
            .setURL('https://icanhelp.richmond.ca/recruiter/index.php?class=OppSearch&recruiterID=501')
            .setDescription('Choose the volunteer that speaks to you.')
            .addFields(
                { name: 'Arts/Heritage', value: '.' },
                { name: 'Seniors Centre, 55+', value: '.' },
                { name: 'Aquatics', value: '.' },
                { name: 'Community Sports', value: '.' },
                { name: 'Community Centres', value: '.' },

                )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};