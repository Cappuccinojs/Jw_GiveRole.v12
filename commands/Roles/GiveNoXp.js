module.exports = {
    commands: 'GiveNoXp',
    minArgs: 1,
    expectedArgs: "<@ User>",
    requiredRoles: ['Discord Master'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('لطفا یک نفر را تگ کنید');
            return;
        }
        arguments.shift();
        const { guild } = message;
        const member = guild.members.cache.get(targetUser.id);
        member.roles.add('928732717439389787');

        message.reply(`رول به یوزر داده شد`);
    },
};