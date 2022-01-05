const gify = ["https://media2.giphy.com/media/bGm9FuBCGg4SY/giphy.gif", "https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif", "https://i.pinimg.com/originals/04/7e/1b/047e1bef01702b9252ef3a528a2401ad.gif", "https://media.tenor.com/images/a6669f4044d66658c7ce96be768965e4/tenor.gif"];

const Discord = require("discord.js")

module.exports = {
    name: "pocałuj",
    category: "4fun",
    description: "4fun",
    run: (client, message) => {
      if (!message.mentions.users.first()) {
        return message.reply("⚠*Najpierw musisz oznaczyć osobę!*⚠")
      }

      const los = Math.floor(Math.random() * gify.length)
      const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author} właśnie pocałował użytkownika ${message.mentions.users.first()}!`)
        .setImage(gify[los])
        .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

      message.channel.send({
        embeds: [embed]
      })
    }
  }
