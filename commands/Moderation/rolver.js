export default {
    name:"rolver",
    cooldown: 10,
    permission: "MANAGE_ROLES",
    execute(message, args) {



const kisi = message.mentions.members.first()
if (!kisi) return message.reply("Kişi etiketle.")

const rol = message.mentions.roles.first()
if (!rol) return message.reply("Rol etiketle.")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.add(rol.id).then(a=> {
message.reply("Rolü verdim.")
}).catch(err => message.channel.send("Rolü veremedim."));

}

}