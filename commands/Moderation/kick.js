const OWNER_ID = process.env.OWNER_ID;

export default {
    name:"kick",
    cooldown: 10,
    permission: "KICK_MEMBERS",
    execute(message, args) {
  const target = message.mentions.members.first()


if(!target) return message.reply("Bir kişi belirtmelisin.")
  if(target.id == OWNER_ID) return message.reply("Bot Sahibini Atamazsın!")
if(target.id == message.author.id) return message.reply("Kendini Atamazsın.")
if((message.author.id !== OWNER_ID) && target.roles.highest.position > message.member.roles.highest.position) return message.reply("Senden Daha Yetkili Birini Sunucudan Atamazsın.")
if(target.id == message.guild.ownerId) return message.reply("Sunucu Sahibini Atamazsın!")
const reason = args[1] || "Belirtilmedi"



       
   
         target.send(`Sen **${target.user.username}**, **${reason}** Sebebiyle **${message.guild.name}** Sunucusundan Atıldın`).catch(() => {})

        target.kick(reason);

        message.reply({ content: `${target.user.tag} Kişisi **${reason}** Sebebinden Dolayı Suncudan Atıldı`})

       

        
    
    }
}
