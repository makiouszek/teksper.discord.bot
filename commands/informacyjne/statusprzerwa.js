module.exports = {
    name: "sprzerwa",
    run: async (client, message, args) => {
        if(message.author.id !== "632880812517359627") return message.reply("Nie masz wystarczających uprawnień aby użyć tej komendy")
        client.user.setActivity("Przerwa techniczna!");message.channel.send("Status bota został zmieniony!")
        
    }
}