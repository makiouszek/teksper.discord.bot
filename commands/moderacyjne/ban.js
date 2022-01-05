module.exports = {
    name: "ban",
    run: async (client, message, args) => {
        if (!args[0]) return message.reply(`Podaj użytkownika`);

        const userban = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase());
        if (!userban) return message.channel.send(`Nie znaleziono takiego użytkownika`);
        if (!userban.bannable) return message.channel.send(`Nie mogę zbanować tego użytkownika`);

        let reason = args[1];
        if (!reason) reason = 'Nie podano powodu';

        const memberTag = userban.user.tag;

        userban.ban({ reason: reason });

        return message.channel.send(`Użytkownik \`${memberTag}\` został zbanowany z powodem \`${reason}\``);
    
if (!message.member.hasPermission('BAN_MEMBERS')) { }
}
} 