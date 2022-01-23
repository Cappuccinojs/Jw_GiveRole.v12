module.exports = {
    commands: ['GetYT'],
    minArgs: 1,
    expectedArgs: "<@ User>",
    requiredRoles: ['Head Media'],
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first();
        if (!targetUser) {
            message.reply('لطفا یک یوزر را منشن کنید');
            return;
        }

        arguments.shift();

        const { guild } = message;

        const member = guild.members.cache.get(targetUser.id);

        if (member.roles.cache.get('850462982697910352')) {
            member.roles.remove('850462982697910352');
            message.reply(`رول از یوزر گرفته شد`);
        } else {
            message.reply(`یوزر تعریف شده رول داده شده را ندارد`);
        }
    },
};