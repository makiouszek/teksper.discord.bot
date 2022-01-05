module.exports = {
    name: "customstatus",
    run: async (client, message, args) => {
        message.channel.send(`wiadomosc`)
        if(message.author.id !== "632880812517359627") return message.reply("Nie masz wystarczających uprawnień do użycia tej komendy!")
        client.user.setActivity(wiadomosc);message.channel.send("Status bota został zmieniony!")
        
    }
}