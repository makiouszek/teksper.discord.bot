const Discord = require('discord.js');

module.exports = {
    name: "wkurwienie",
    category: "4fun",
    description: "4fun",
    run: (client, message) => {
   const embed = new Discord.MessageEmbed()
   .setDescription(`${message.author} właśnie jest zdenerwowany 😣`)
   .setImage('https://media.tenor.com/images/ef795689617a8c97379b297fd7557235/tenor.gif')
   .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())
   
  message.channel.send(embed)
    }
    
  }
 