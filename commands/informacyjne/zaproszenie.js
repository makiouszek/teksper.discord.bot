const Discord = require('discord.js');
module.exports = {
    name: "zaproszenie",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🎈Zaproszenie bota:🎈')
    .setDescription('> TeksperBOT to nowy inowacyjny bot pisany w Discord.js! Jest cały czas rozwijany oraz jest w fazie alpha. Posiada też hosting 24/7') 
    .setTitle('Link do zaproszenia bota:')
    .setURL('https://discord.com/api/oauth2/authorize?client_id=803560589581352962&permissions=8&scope=bot')
    .setTimestamp()
	.setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

message.channel.send(embed);
    }
}