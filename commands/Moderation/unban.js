import { Client, Collection, MessageEmbed } from "discord.js"


export default {
    name: "unban",
    permission: "BAN_MEMBERS",
    cooldown: 10,
    execute(message) {
        const { member, mentions } = message

        const tag = `<@${member.user.username}`

        const target = mentions.users.first()
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.unban()
            message.reply(`${tag} Banı Kaldırıldı`)
            
        
            
        } else {
            message.channel.send(`${tag} Lütfen Birini Belirtin.`)
        }
    }
      
}