// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'find-major',
    // Description of Command
    description: 'HighTechU Promotion',
    // Aliases
    aliases: ['fm'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('List of majors')
            .setURL('https://www.act.org/content/act/en/research/reports/act-publications/college-choice-report-class-of-2013/college-majors-and-occupational-choices/college-majors-and-occupational-choices.html')
            .setDescription('Choose the major that speaks to you.')
            .addFields(
                { name: 'AGRICULTURE & NATURAL RESOURCES CONSERVATION', value: '.' },
                { name: 'ARCHITECTURE', value: '.' },
                { name: 'AREA, ETHNIC, & MULTIDISCIPLINARY STUDIES', value: '.' },
                { name: 'ARTS: VISUAL & PERFORMING', value: '.' },
                { name: 'BUSINESS', value: '.' },
                { name: 'COMMUNICATIONS', value: '.' },
                { name: 'COMMUNITY, FAMILY, & PERSONAL SERVICES', value: '.' },
                { name: 'COMPUTER SCIENCE & MATHEMATICS', value: '.' },
                { name: 'EDUCATION', value: '.' },
                { name: 'ENGINEERING', value: '.' },
                { name: 'ENGINEERING TECHNOLOGY & DRAFTING', value: '.' },
                { name: 'ENGLISH & FOREIGN LANGUAGES', value: '.' },
                { name: 'HEALTH ADMINISTRATION & ASSISTING', value: '.' },
                { name: 'HEALTH SCIENCES & TECHNOLOGIES', value: '.' },
                { name: 'PHILOSOPHY, RELIGION, & THEOLOGY', value: '.' },
                { name: 'REPAIR, PRODUCTION, & CONSTRUCTION', value: '.' },
                { name: 'SCIENCES: BIOLOGICAL & PHYSICAL', value: '.' },
                { name: 'SOCIAL SCIENCES & LAW', value: '.' },

                )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};