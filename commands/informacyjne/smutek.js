const gify = ["https://tenor.com/view/sad-puppy-eyes-please-gif-7916904, https://tenor.com/view/baby-cry-crying-baby-crying-cute-gif-11860264, https://tenor.com/view/dog-triste-puppy-dog-eyes-pout-sad-gif-17447258 "]

const Discord = require('discord.js');

module.exports = {
    name: "płacz",
    category: "4fun",
    description: "4fun",
    run: (client, message) => {
   const embed = new Discord.MessageEmbed()
   .setDescription(`${message.author} Własnie teraz płacze 😪`)
   .setImage(gify[LOS])
   .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())
   
  message.channel.send(embed)
    }
    
  }
