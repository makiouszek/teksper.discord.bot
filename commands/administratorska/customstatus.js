const { owner } = require("../../config")

module.exports = {
    name: "customstatus",
    run: async (client, msg, args) => {
        if (msg.author.id !== owner)
            return msg.reply("Nie masz wystarczających uprawnień do użycia tej komendy!")

        client.user.setActivity(msg.content)
        msg.channel.send("Status bota został zmieniony!")
    }
}
