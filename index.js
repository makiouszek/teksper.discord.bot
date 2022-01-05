const { Collection, Client} = require("discord.js");
const client = new Client();
const { readdirSync } = require("fs");
const path = require ('path')

client.commands = new Collection();
client.aliases = new Collection();
client.config = require("./config/config.js");

readdirSync("./handlers/").forEach(handler => {
    if (!handler.endsWith(".handler.js")) return

    require(`./handlers/${handler}`)(client)
})

client.login(client.config.token)
