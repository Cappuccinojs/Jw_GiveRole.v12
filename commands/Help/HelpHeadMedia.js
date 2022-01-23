const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'HeadMedia',
    minArgs: 0,
    maxArgs: 0,
    expectedArgs: '',
    callback: (message) => {
        const embed = new MessageEmbed();
        embed.setTitle('**HeadMedia Commands**');
        embed.setColor("YELLOW");
        embed.setFooter('JwTeam');
        embed.addFields([{
                name: '**--GiveStreamer <@ User>**',
                value: '**Gives Streamer Role To Mentioned User**'
            },
            {
                name: '**--GiveYT <@ User>**',
                value: '**Gives YouTuber Role To The Mentioned User**'
            },
            {
                name: '**--GiveAparat <@ User>**',
                value: '**Gives Aparater Role To The User**'
            },
            {
                name: '**--GiveMedia <@ User>**',
                value: '**Gives Media Role To The User**'
            },
            {
                name: '**--GetStreamer <@ User>**',
                value: '**Gets Streamer Role From Mentioned User**'
            },
            {
                name: '**--GetYT <@ User>**',
                value: '**Gets YouTuber Role From The Mentioned User**'
            },
            {
                name: '**--GetAparat <@ User>**',
                value: '**Gets Aparater Role From The User**'
            },
            {
                name: '**--GetMedia <@ User>**',
                value: '**Gets Media Role From The User**'
            }
        ]);
        message.channel.send(embed);
    }
};