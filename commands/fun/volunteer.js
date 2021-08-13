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
            .setColor('#FAEF20')
            .setTitle('List of volunteers')
            .setURL('https://icanhelp.richmond.ca/recruiter/index.php?class=OppSearch&recruiterID=501')
            .setDescription('Choose the volunteer that speaks to you.')
            .setThumbnail('https://icon-library.com/images/volunteer-icon/volunteer-icon-13.jpg')
            .addFields(
                { name: 'Arts/Heritage', value: 'Arts' },
                { name: 'Seniors Centre, 55+', value: 'Seniors Centre' },
                { name: 'Aquatics', value: 'Aquatics' },
                { name: 'Community Sports', value: 'Soccer, Basketball, ect.' },
                { name: 'Community Centres', value: 'Community Centres' },

                )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};