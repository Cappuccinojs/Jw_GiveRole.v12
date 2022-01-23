module.exports = {
    commands: 'GiveElite',
    minArgs: 1,
    expectedArgs: "<@ User>",
    requiredRoles: ['jw team'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('لطفا یک نفر را تگ کنید');
            return;
        }
        arguments.shift();
        const { guild } = message;
        const member = guild.members.cache.get(targetUser.id);
        member.roles.add('799219921845616681');

        message.reply(`رول به یوزر داده شد`);
    },
};