// Import Fetch and Discord.js
const fetch = require('node-fetch');
const Discord = require('discord.js');

// Chart Module
module.exports = {
    // Name of Command
    name: 'time',
    // Description of Command
    description: 'Displays Chart',
    // Usage Instructions
    usage: '[YYYY-MM-DD] [activity]',
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message args
    execute(message, args) {
        // Construct URL
        const date = args[0];
        const activity = args[1];


        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('Calendar')
            .setDescription('Set your dates and activities.')
            .addFields(
                { name: 'Activity', value: activity, inline: true },
                { name: 'Date', value: date, inline: true },
            )
            .setTimestamp()
            .setFooter('Saved to calendar');

        // Send Message
        message.channel.send(embed);
    },
};