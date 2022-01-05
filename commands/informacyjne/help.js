const Discord = require('discord.js');
module.exports = {
    name: "pomoc",
    run: async (client, message, args) => {
        // at the top of your file

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('🔧Komendy bota:🔧')
        .setDescription('> TeksperBOT to innowacyjny bot powoli rozwijany w fazie alpha. Posiada aktualnie **13** komend!❤')
        .addFields(
            { name: 'Ban', value: 'Banuje pernamentnie osobę!' },
            { name: 'Kick', value: 'Wyrzuca osobę z serwera!', inline: true },
            { name: 'Mute', value: 'Wycisza osobę na czas nieokreślony!', inline: true },
            { name: 'Clear', value: 'Czyści określoną liczbę wiadomości na kanale!'},
            { name: 'Uptime', value: 'Sprawda czas włączenia bota!'},
            { name: 'Ping', value: 'Sprawdza WebSocket bota!'},
            { name: 'Serverinfo', value: 'Sprawdza statystyki serwera!'},
            { name: 'Avatar', value: 'Sprawdza awatar kogoś lub swój!'},
            { name: 'InfoBot', value: 'Sprawdza informacje o bocie!'},
            { name: 'Zaproszenie', value: 'Zaproszenie na własny serwer mojego bota!'},
            { name: 'Uderzenie', value: 'Uderza użytkownika!'},
            { name: 'Przytuł', value: 'Przytula użytkownika!'},
            { name: 'Smutek', value: 'Pokazuje smutnego gifa!'},
            { name: 'Wkurwienie', value: 'Pokazuje wkurzonego gifa!'},
            { name: 'Pocałuj', value: 'Pocałowywuje danego użytkownika!'},
            { name: 'Ocena', value: 'Użycie tej komendy daje mu reputacje i wysłanie wiadomości na kanał'}
        )
        .setTimestamp()
        .setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

        message.channel.send({
            embeds: [embed]
        })
    }
}