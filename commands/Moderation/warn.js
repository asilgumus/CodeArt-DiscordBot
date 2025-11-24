export default {
   name:"warn",
   permission:"KICK_MEMBERS",
   cooldown: 5,
   execute(message, args, client) {
   
    const target = message.mentions.members.first()


if(!target) return message.reply("Bir Kişi Belirtmelisin.")
if(target.id == "746458448669048863") return message.reply("Bot Sahibini Uyaramazsın!")
if(target.id == message.author.id) return message.reply("Kendini Atamazsın.")
if((message.author.id !== "746458448669048863") && target.roles.highest.position > message.member.roles.highest.position) return message.reply("Senden Daha Yetkili Birini Uyaramazsın.")
const reason = args[1] || "Belirtilmedi"


target.send(`Sen **${target.user.username}****${message.guild.name}** Sunucusundan , **${reason}** Sebebindan Dolayı Uyarı Aldın`).catch(() => {})


message.reply(`**${target.user.username}** , **${reason}** Sebebiyle Uyarı Aldı`)


}
}