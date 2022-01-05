module.exports = {
    name: "skod",
    run: async (client, message, args) => {
        if(message.author.id !== "632880812517359627") return message.reply("nie możesz użyć tej komendy")
        client.user.setActivity("Kod źródłowy");message.channel.send("Status bota został zmieniony!")
        
    }
}