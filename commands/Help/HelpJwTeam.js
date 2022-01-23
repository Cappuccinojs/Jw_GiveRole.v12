const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'JwTeam',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    callback: (message) => {
        const embed = new MessageEmbed();
        embed.setTitle('**JwTeam Commands**');
        embed.setColor("YELLOW");
        embed.setFooter('JwTeam');
        embed.addFields([{
                name: '**--GetHoster <@ User>**',
                value: '**Gets Hoster Role From Mentioned User**'
            },
            {
                name: '**--GetJigsaw <@ User>**',
                value: '**Gets Jigsw Role From The Mentioned User**'
            },
            {
                name: '**--GetVeteran <@ User>**',
                value: '**Gets Veteran Role From The User**'
            },
            {
                name: '**--GetElite <@ User>**',
                value: '**Gets Elite Role From The User**'
            },
            {
                name: '**--GetSaint <@ User>**',
                value: '**Gets Saint Role From Mentioned User**'
            },
            {
                name: '**--GiveHoster <@ User>**',
                value: '**Gives The Hoster Role To THe Mentioned User**'
            },
            {
                name: '**--GiveJigsaw <@ User>**',
                value: '**Gives The Jigsaw Role To THe Mentioned User**'
            },
            {
                name: '**--GiveVeteran <@ User>**',
                value: '**Gives Veteran Role To The User**'
            },
            {
                name: '**--GiveElite <@ User>**',
                value: '**Gives Elite Role To The User**'
            },
            {
                name: '**--GiveSaint <@ User>**',
                value: '**Gives The Saint Role To The Mentioned User**'
            }
        ]);
        message.channel.send(embed);
    }
};