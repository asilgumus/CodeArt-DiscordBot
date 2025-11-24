import { MessageEmbed } from "discord.js";

export default {
    name: "changeusername",
    cooldown: 3,
    permission: "MANAGE_ROLES",
    execute(message,args,  client) {
        // Komuttan yeni takma adını al
        const newNickname = args[1]

        if (!newNickname) {
            return message.reply('Lütfen bir takma ad belirtin.');
        }
        const target = message.mentions.members.first()
        target.setNickname(newNickname)
        message.reply(`Kullanıcının Takma Adı ${newNickname} Olarak Değiştirildi`)

  
        }
    };
