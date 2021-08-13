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
            .setColor('#FAEF20')
            .setTitle('List of work')
            .setURL('https://ca.indeed.com')
            .setDescription('Choose the work that speaks to you.')
            .setThumbnail('https://icons-for-free.com/iconfiles/png/512/suitcase+work+icon-1320165848716624003.png')
            .addFields(
                { name: 'Physician', value: 'Treating chronic illnesses to advising about preventative healthcare.' },
                { name: 'Software Developer', value: 'Develop intuitive software that meets and exceeds the needs of the company.' },
                { name: 'Dentist', value: 'Diagnose, treat, prevent and control disorders of the teeth and mouth.' },
                { name: 'Teacher', value: 'Develop curriculum and lesson plans.' },
                { name: 'IT manager', value: 'Responsible for coordinating, planning, and leading computer-related activities in an organization.' },

                )
            .setTimestamp();

        // Send Message
        message.channel.send(embed);
    },
};