const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'HeadHelper',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    callback: (message) => {
        const embed = new MessageEmbed();
        embed.setTitle('**HeadHelper Commands**');
        embed.setColor("YELLOW");
        embed.setFooter('JwTeam');
        embed.addFields([{
                name: '**--GetHelper <@ User>**',
                value: '**Gets Helper Role From Mentioned User**'
            },
            {
                name: '**--GetHelper+ <@ User>**',
                value: '**Gets Helper+ Role From The Mentioned User**'
            },
            {
                name: '**--GiveHelper <@ User>**',
                value: '**Gives Helper Role To The User**'
            },
            {
                name: '**--GiveHelper+ <@ User>**',
                value: '**Gives Helper+ Role To The User**'
            }
        ]);
        message.channel.send(embed);
    }
};