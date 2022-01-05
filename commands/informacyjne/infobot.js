const Discord = require('discord.js');
module.exports = {
    name: "botinfo",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('❗Informacje o bocie:❗')
    .addFields(
		{ name: '👑Właściciel👑', value: '> Makiouszek#1312' },
		{ name: '📈Ping bot📈', value: `> Ping (Web socket) to ${client.ws.ping}`, inline: true },
	)
    .setTimestamp()
	.setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

message.channel.send(embed);
    }
}