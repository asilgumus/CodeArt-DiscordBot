import { MessageEmbed } from "discord.js";

export default {
    name: "createvoicechannel",
    cooldown: 3,
    permission: "ADMINISTRATOR",
    execute(message, client) {
        // Komuttan yeni kanal adını al
        const args = message.content.split(' ');
        const channelName = args.slice(1).join(' ');

        if (!channelName) {
            return message.reply('Lütfen bir kanal adı belirtin.');
        }

        // Yeni metin kanalı oluştur
        message.guild.channels.create(channelName, {
            type: 'GUILD_VOICE'
        })
        .then(channel => {
            const response = new MessageEmbed()
                .setAuthor({ name: "Sanguis"})
                .setDescription(`Yeni metin kanalı başarıyla oluşturuldu: ${channel}`)
                .setColor([115, 0, 222])
                .setFooter({ text: "Sanguis Botu Hizmetinizde!" })
                .setTimestamp();

            message.reply({ embeds: [response] });
        })
        .catch(error => {
            console.error(error);
            message.reply('Kanal oluşturulurken bir hata oluştu.');
        });
    }
};
