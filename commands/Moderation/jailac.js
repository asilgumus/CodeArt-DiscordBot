import { MessageEmbed } from 'discord.js';
import client from '../../app.js'; // client'ı ana dosyadan içe aktarın

const mutedUsers = new Map();

export default {
    name: "jailac",
    cooldown: 5,
    permission: "MUTE_MEMBERS", 
    execute(message, args) {
        const target = message.mentions.members.first();

        if (!target) {
            const errorEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription("Lütfen hapisten çıkarılacak kullanıcıyı etiketleyin.");
            return message.channel.send({ embeds: [errorEmbed] });
        }

        if (!target.voice.channel) {
            mutedUsers.set(target.id, true);
            const successEmbed = new MessageEmbed()
                .setColor("GREEN")
                .addField("Hapisten Çıkan", `${target.user}`, true)
                .addField("Hapisten Çıkartan", `${message.author}`, true);

            return message.channel.send({ embeds: [successEmbed] }).catch(console.error);
        } else {
            target.voice.setMute(false, "Jail komutuyla mute yapıldı").catch(console.error);
            target.voice.setDeaf(false, "Jail komutuyla sağırlaştırıldı").catch(console.error);
        }
    }
}

client.on('voiceStateUpdate', (oldState, newState) => {
    const member = newState.member;

    if (!oldState.channel && newState.channel && mutedUsers.has(member.id)) {
        member.voice.setMute(false, "Jail komutuyla mute yapıldı").catch(console.error);
        member.voice.setDeaf(false, "Jail komutuyla sağırlaştırıldı").catch(console.error);
        mutedUsers.delete(member.id);
        console.log(`${member.user.username} ses kanalına girdi ve mute/deafen uygulandı.`);
    }
});
