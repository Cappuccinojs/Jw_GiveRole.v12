const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'Help',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    callback: (message) => {
        const embed = new MessageEmbed();
        embed.setTitle('**Help Commands**');
        embed.setColor("YELLOW");
        embed.setFooter('JwTeam');
        embed.addFields([{
                name: '**--HeadMedia**',
                value: '**Head Media Commands**'
            },
            {
                name: '**--HeadHelper**',
                value: '**Head Helper Commands**'
            },
            {
                name: '**--HeadAdmin**',
                value: '**Head Admin Commands**'
            },
            {
                name: '**--DiscordMaster**',
                value: '**DiscordMaster Commands**'
            },
            {
                name: '**--JwTeam**',
                value: '**JwTeam Commands**'
            }
        ]);
        message.channel.send(embed);
    }
};