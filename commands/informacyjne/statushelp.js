module.exports = {
    name: "statushelp",
    run: async (client, message, args) => {
        if(message.author.id !== "632880812517359627") return message.reply("nie możesz użyć tej komendy")
        client.user.setActivity("*help");message.channel.send("Status bota został zmieniony!")
        
    }
}