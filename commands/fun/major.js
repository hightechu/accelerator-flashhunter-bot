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
            .setColor('#FAEF20')
            .setTitle('List of majors')
            .setURL('https://www.act.org/content/act/en/research/reports/act-publications/college-choice-report-class-of-2013/college-majors-and-occupational-choices/college-majors-and-occupational-choices.html')
            .setDescription('Choose the major that speaks to you.')
            .setThumbnail('https://www.collinsdictionary.com/images/thumb/book_181404689_250.jpg')
            .addFields(
                { name: 'AGRICULTURE & NATURAL RESOURCES CONSERVATION', value: 'Major' },
                { name: 'ARCHITECTURE', value: 'Major' },
                { name: 'AREA, ETHNIC, & MULTIDISCIPLINARY STUDIES', value: 'Major' },
                { name: 'ARTS: VISUAL & PERFORMING', value: 'Major' },
                { name: 'BUSINESS', value: 'Major' },
                { name: 'COMMUNICATIONS', value: 'Major' },
                { name: 'COMMUNITY, FAMILY, & PERSONAL SERVICES', value: 'Major' },
                { name: 'COMPUTER SCIENCE & MATHEMATICS', value: 'Major' },
                { name: 'EDUCATION', value: 'Major' },
                { name: 'ENGINEERING', value: 'Major' },
                { name: 'ENGINEERING TECHNOLOGY & DRAFTING', value: 'Major' },
                { name: 'ENGLISH & FOREIGN LANGUAGES', value: 'Major' },
                { name: 'HEALTH ADMINISTRATION & ASSISTING', value: 'Major' },
                { name: 'HEALTH SCIENCES & TECHNOLOGIES', value: 'Major' },
                { name: 'PHILOSOPHY, RELIGION, & THEOLOGY', value: 'Major' },
                { name: 'REPAIR, PRODUCTION, & CONSTRUCTION', value: 'Major' },
                { name: 'SCIENCES: BIOLOGICAL & PHYSICAL', value: 'Major' },
                { name: 'SOCIAL SCIENCES & LAW', value: 'Major' },

                )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};