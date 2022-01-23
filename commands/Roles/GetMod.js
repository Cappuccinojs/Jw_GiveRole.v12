module.exports = {
    commands: ['GetMod'],
    minArgs: 1,
    expectedArgs: "<@ User>",
    requiredRoles: ['Head Admin'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('لطفا یک یوزر را منشن کنید');
            return;
        }

        arguments.shift();

        const { guild } = message;

        const member = guild.members.cache.get(targetUser.id);

        if (member.roles.cache.get('799215274120314890')) {
            member.roles.remove('799215274120314890');
            message.reply(`رول از یوزر گرفته شد`);
        } else {
            message.reply(`یوزر تعریف شده رول داده شده را ندارد`);
        }
    },
};