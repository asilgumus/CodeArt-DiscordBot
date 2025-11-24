
const OWNER_ID = process.env.OWNER_ID;

export default {
    name:"ban",
    cooldown: 10,
    permission: "BAN_MEMBERS",
    execute(message, args, client) {
        const target = message.mentions.members.first()
        if(!target) return message.reply("Bir kişi belirtmelisin.")
        if(target.id == message.author.id) return message.reply("Kendini Banlayamazsın.")
        if(target.id == OWNER_ID) return message.reply("Bot Sahibini Banlayamazsın!")
        if((message.author.id !== OWNER_ID) && target.roles.highest.position > message.member.roles.highest.position) return message.reply("Senden Daha Yetkili Birini Sunucudan Banlayamazsın.")
        if(target.id == message.guild.ownerId) return message.reply("Sunucu Sahibini Banlayamazsın!")
        const reason = args[1] || "Belirtilmedi"
        if(!db.fetch("bans_" + message.guild.id)) db.set("bans_" + message.guild.id + "." + target.user.username, { name: target.user.username, id : target.user.id }) 

        target.send(`Sen **${target.user.username}**, **${reason}** Sebebiyle **${message.guild.name}** Sunucusundan Banlandın`).catch(() => {})

        target.ban({ reason });

        db.set("bans_" + message.guild.id + "."+target.user.username, { name: target.user.username, id: target.user.id })

        message.reply({ content: `${target.user.tag} Kişisi **${reason}** Sebebinden Dolayı **${biname}** Suncudan Banlandı`})

    }
}
