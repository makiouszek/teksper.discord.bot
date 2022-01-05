const gify = ["https://media1.tenor.com/images/f448f06f6674c95e298f68600d607fec/tenor.gif?itemid=12389656", "https://media3.giphy.com/media/u2LJ0n4lx6jF6/200.gif", "https://thumbs.gfycat.com/BitesizedEnragedAfricanaugurbuzzard-max-1mb.gif"];

const Discord = require("discord.js")

module.exports = {
    name: "uderzenie",
    category: "4fun",
    description: "4fun",
    run: (client, message) => {
const los = Math.floor(Math.random() * gify.length)
   const embed = new Discord.MessageEmbed()
   .setDescription(`${message.author} właśnie uderzył użytkownika ${message.mentions.users.first()}!`)
   .setImage(gify[los])
   .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())
   if (!message.mentions.users.first()){
    return message.reply("⚠*Najpierw musisz oznaczyć osobę!*⚠")
  }
   
  message.channel.send(embed)
    }
    
  }


 