const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'DiscordMaster',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    callback: (message) => {
        const embed = new MessageEmbed();
        embed.setTitle('**DiscordMaster Commands**');
        embed.setColor("YELLOW");
        embed.setFooter('JwTeam');
        embed.addFields([{
                name: '**--GetNoTicket <@ User>**',
                value: '**Gets NoTicket Role From Mentioned User**'
            },
            {
                name: '**--GetNoXp <@ User>**',
                value: '**Gets NoXp Role From The Mentioned User**'
            },
            {
                name: '**--GiveNoTicket <@ User>**',
                value: '**Gives NoTicket Role To The User**'
            },
            {
                name: '**--GiveNoXp <@ User>**',
                value: '**Gives NoXp Role To The User**'
            }
        ]);
        message.channel.send(embed);
    }
};