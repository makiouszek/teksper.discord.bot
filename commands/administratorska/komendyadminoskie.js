module.exports = {
    name: "adkomendy",
    run: async (client, message, args) => {
        
    
 const embed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setTitle('🔧Komendy bota:🔧')
 .setDescription('> TeksperBOT to innowacyjny bot powoli rozwijany w fazie alpha. Posiada aktualnie **13** komend!❤')
 .addFields(
     { name: 'statusprzerwa', value: 'Ustawia botowi status przerwy technicznej' },
     { name: 'statushelp', value: 'Pokazuje na statusie bota polecenie z wszystkimi komendami bota', inline: true },
     { name: 'skod', value: 'Pokazuje status "Kod Źródłowy"', inline: true },
    

     
 )
 .setTimestamp()
 .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

message.channel.send(embed);
 }
}
        
    


