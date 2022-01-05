module.exports = {
    name: "ping",
    run: async (client, message, args) => {
        return message.reply(`Mój ping (Web socket) to ${client.ws.ping}`);
    }
}
