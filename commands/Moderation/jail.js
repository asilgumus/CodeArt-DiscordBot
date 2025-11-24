import { MessageEmbed } from 'discord.js';
import client from '../../app.js'; // client'ı ana dosyadan içe aktarın

const mutedUsers = new Map();

export default {
    name: "jail",
    cooldown: 5,
    permission: "MUTE_MEMBERS", 
    execute(message, args) {
        const target = message.mentions.members.first();

        if (!target) {
            const errorEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription("Lütfen hapise atılacak kullanıcıyı etiketleyin.");
            return message.channel.send({ embeds: [errorEmbed] });
        }

        if (target.id == "746458448669048863") {
            const ownerEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription("Bot Sahibini Hapise Atamazsın!");
            return message.channel.send({ embeds: [ownerEmbed] });
        }

        if (!target.voice.channel) {
            mutedUsers.set(target.id, true);
            const successEmbed = new MessageEmbed()
                .setColor("GREEN")
                .addField("Hapise Atılan", `${target.user}`, true)
                .addField("Hapise Atan", `${message.author}`, true);

            return message.channel.send({ embeds: [successEmbed] }).catch(console.error);
        } else {
            target.voice.setMute(true, "Jail komutuyla mute yapıldı").catch(console.error);
            target.voice.setDeaf(true, "Jail komutuyla sağırlaştırıldı").catch(console.error);

            const successEmbed = new MessageEmbed()
                .setColor("GREEN")
                .addField("Hapise Atılan", `${target.user.tag}`, true)
                .addField("Hapise Atan", `${message.author.tag}`, true);

            return message.channel.send({ embeds: [successEmbed] }).catch(console.error);
        }
    }
}

client.on('voiceStateUpdate', (oldState, newState) => {
    const member = newState.member;

    if (!oldState.channel && newState.channel && mutedUsers.has(member.id)) {
        member.voice.setMute(true, "Jail komutuyla mute yapıldı").catch(console.error);
        member.voice.setDeaf(true, "Jail komutuyla sağırlaştırıldı").catch(console.error);
        mutedUsers.delete(member.id);
        console.log(`${member.user.username} ses kanalına girdi ve mute/deafen uygulandı.`);
    }
});
