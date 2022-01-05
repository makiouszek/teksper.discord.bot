const Discord = require(`discord.js`);

module.exports = {
    name: "avatar",
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
            .setColor(RANDOM)
            .setDescription('O to awatar użytkownika!')
            .setAuthor(user.username)
            .setImage(user.avatarURL({dynamic : true}));
            avatar.Embed.setFooter(`Wykonał: ${message.author.tag}`, message.author.displayAvatarURL())

        message.channel.send({
            embeds: [embed]
        })
    }
}