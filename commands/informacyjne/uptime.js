module.exports = {
    name: "uptime",
    run: async (client, message, args) => {
        const ms = client.uptime
const sec = Math.floor((ms / 1000) % 60)
const min = Math.floor((ms / (1000 * 60)) % 60)
const hrs = Math.floor((ms / (1000 * 60 * 60)) % 24)
const days = Math.floor(ms / (1000 * 60 * 60 * 24))
message.channel.send(`**Mój bot działa: ${days} dni, ${hrs} godzin, ${min} minut, ${sec} sekund.**`)
        
    }
}