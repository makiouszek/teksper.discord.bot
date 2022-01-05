const gify = ["https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif", "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif", "https://i.imgur.com/r9aU2xv.gif?noredirect"];

const Discord = require("discord.js")

module.exports = {
    name: "przytul",
    category: "4fun",
    description: "4fun",
    run: (client, message) => {
      if (!message.mentions.users.first()) {
        return message.reply("⚠*Najpierw musisz oznaczyć osobę!*⚠")
      }

      const los = Math.floor(Math.random() * gify.length)
      const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author} właśnie przytulił użytkownika ${message.mentions.users.first()}!`)
        .setImage(gify[los])
        .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

      message.channel.send({
        embeds: [embed]
      })
    }
  }
