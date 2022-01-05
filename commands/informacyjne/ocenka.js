module.exports = {
    name: "ocena",
    run: async (client, message, args) => {
        message.author.send("Dziękuje za danie mi opinii!")
        client.channels.cache.get(`928284495864541195`).send(message.author)(`Dał mi pozytywną opinie!`)
        
    }
}



