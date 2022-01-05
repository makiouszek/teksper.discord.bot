module.exports = {
    name: "kick",
    run: async (client, message, args) => {
        if (message.member.hasPermission("KICK_MEMBERS")) {
    if (message.members.mentions.first()) {
        try {
            message.members.mentions.first().kick();
        } catch {
            message.reply("Nie mam permisji do wyrzucenia tej osoby! " + message.members.mentions.first());
        }
    } else {
        message.reply("Ty nie masz permisji do wyrzucenia! " + message.members.mentions.first());
    }
}
    }
}