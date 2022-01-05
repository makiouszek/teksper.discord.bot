const Discord = require("discord.js");
const client = new Discord.Client();
const { readdirSync } = require("fs");
const path = require ('path')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.config = require("./config/config.js");

readdirSync("./handlers/").forEach(handler => {
    if (!handler.endsWith(".handler.js")) return;

    require(`./handlers/${handler}`)(client);
});

client.login(client.config.token);