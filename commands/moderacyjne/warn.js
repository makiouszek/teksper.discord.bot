module.exports = {
    name: "warn",
    run: async (client, message, args) => {
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Ty nie możesz użyć tej komendy!")
     if (!dUser) return message.channel.send("Nie można znaleść użytkownika!")
     let dMessage = args.join(" ").slice(22);
     if (dMessage.length < 1) return message.reply('Jaki jest powód ostrzeżenia?')
     message.author.send(`${User}, Zostałeś ostrzeżony bo zrobiłeś: ${Message} na serwerze ${message.guild.name}!`)
     message.channel.send(`${User} Został ostrzeżony bo zrobił: ${Message} :thumbsdown:`)

    }
    
}
