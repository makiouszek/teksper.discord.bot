const Discord = require('discord.js')

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "serverinfo",
  run: (client, message) => {
 const embed = new Discord.MessageEmbed()
.setAuthor('📃Informacje o serwerze:📃 ' +  message.guild.name,message.guild.iconURL)
.setColor('RANDOM')
.addField('ID serwera:' , message.guild.id )
.addField('Ilośc członków:' ,message.guild.memberCount)
.addField('Ilość ról:' , message.guild.roles.cache.size)
.addField('Właściciel:' , message.guild.owner, true)
.addField('ID kanału AFK:' , message.guild.afkChannelID)
.setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())
.addField('Lokacja serwera:', message.guild.region, true)
.addField('Stworzono:', message.guild.createdAt.toLocaleString(), true)
message.channel.send(embed)
  }
  
}
