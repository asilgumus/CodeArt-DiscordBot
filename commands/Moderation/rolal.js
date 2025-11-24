export default {
    name:"rolal",
    cooldown: 10,
    permission: "MANAGE_ROLES",
    execute(message, args) {



const target = message.mentions.members.first()
if (!target) return message.reply("Kişi etiketle.")

const rol = message.mentions.roles.first()
if (!rol) return message.reply("Rol etiketle.")

if((message.author.id !== "746458448669048863") && target.roles.highest.position > message.member.roles.highest.position) return message.reply("Senden Daha Yetkili Birini Sunucudan Atamazsın.")



const kisiyibul = message.guild.members.cache.get(target.id)

kisiyibul.roles.remove(rol.id).then(a=> {
message.reply("Rolü aldım.")
}).catch(err => message.channel.send("Rolü alamadım."));

}

}