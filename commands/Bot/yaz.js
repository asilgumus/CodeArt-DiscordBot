import { MessageEmbed } from "discord.js"

export default {
    name:"yaz",
    cooldown: 5,
    permission:"ADMINISTRATOR",
    execute(message, args, client) {
    

        let mesaj = args.slice(0).join(' ');
        if (mesaj.length < 1) return message.reply('> **Yazmam için herhangi bir şey yazın!**');
        message.channel.send(mesaj);
        message.delete();
 
 
 
 }
 }