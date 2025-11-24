const OWNER_ID = process.env.OWNER_ID;

export default {
    name: "mute",
    cooldown: 10,
    permission: "MUTE_MEMBERS",
    async execute(message, args) {
        const target = message.mentions.members.first();
        if (!target) return message.reply("Lütfen susturmak istediğiniz kullanıcıyı etiketleyin.");

        // Yetki kontrolü
        if (!message.member.permissions.has('MUTE_MEMBERS')) {
            return message.reply("Bu komutu kullanmak için gerekli yetkiye sahip değilsiniz.");
        }

        // Hedef kullanıcının yetki seviyesi kontrolü
        if ((message.author.id !== OWNER_ID) && target.roles.highest.position >= message.member.roles.highest.position) {
            return message.reply("Senden Daha Yetkili Birini Susturamazsın.");
        }

        // "Muted" rolünü bul
        const role = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!role) return message.reply("Sunucuda 'Muted' adlı bir rol bulunamadı.");

        // Kullanıcıyı bul
        const kisiyibul = message.guild.members.cache.get(target.id);
        if (!kisiyibul) return message.reply("Kullanıcı bulunamadı.");

        try {
            // "Muted" rolünü ekle
            await kisiyibul.roles.add(role);

            // Diğer tüm rollerini kaldır
            await kisiyibul.roles.set([role]);

            message.reply("Susturma başarılı.");
        } catch (error) {
            console.error(error);
            message.channel.send('Bir hata oluştu, kullanıcıyı susturamadım.');
        }
    }
};
