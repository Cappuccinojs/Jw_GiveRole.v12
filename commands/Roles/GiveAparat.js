module.exports = {
    commands: 'GiveAparat',
    minArgs: 1,
    expectedArgs: "<@ User>",
    requiredRoles: ['Head Media'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('لطفا یک نفر را تگ کنید');
            return;
        }
        arguments.shift();
        const { guild } = message;
        const member = guild.members.cache.get(targetUser.id);
        member.roles.add('913800077255016488');

        message.reply(`رول به یوزر داده شد`);
    },
};