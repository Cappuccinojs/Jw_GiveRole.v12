const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'HeadAdmin',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    callback: (message) => {
        const embed = new MessageEmbed();
        embed.setTitle('**HeadAdmin Commands**');
        embed.setColor("YELLOW");
        embed.setFooter('JwTeam');
        embed.addFields([{
                name: '**--GetAdmin <@ User>**',
                value: '**Gets Admin Role From Mentioned User**'
            },
            {
                name: '**--GetMod <@ User>**',
                value: '**Gets Moderator Role From The Mentioned User**'
            },
            {
                name: '**--GiveAdmin <@ User>**',
                value: '**Gives Admin Role To The User**'
            },
            {
                name: '**--GiveMod <@ User>**',
                value: '**Gives Moderator Role To The User**'
            }
        ]);
        message.channel.send(embed);
    }
};