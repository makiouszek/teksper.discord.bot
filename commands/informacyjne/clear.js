module.exports = {
    name: 'clear',
    aliases: ['purge'],
    run: async(client, message, args) => {
        if (!args[0])
            return message.channel.send('Podaj liczbę wiadomości do usunięcia od zakresu 1 do 99')

        if (isNaN(args[0]))
            return message.channel.send('Dozwolone jest tylko używanie liczb')

        if (parseInt(args[0]) > 99)
            return message.channel.send('**Maksymalnie możesz usunąć 99 wiadomości :(**')

        await message.channel
            .bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))

        message.channel.send(`*Pomyślnie usunięto* ${args[0]} *wiadomości!.*`)
    }
}
