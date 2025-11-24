import { MessageEmbed } from "discord.js"
  
export default {
    name:"avatar",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {


        const target = message.mentions.members.first() || message.author;
        const member = message.guild.members.cache.get(target.id);
        if(!target) return message.reply("Bir kişi belirtmelisin.")
        
        
        const response = new MessageEmbed()
        .setTitle(`${message.mentions.users.first().username}`)
        .setColor(0x00ffff)
        .addField('PNG', `[Link](${target.displayAvatarURL({ size: 4096, dynamic: true, format: "png"})})`, true)
        .addField('JPG', `[Link](${target.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg"})})`, true)
        .addField('WEBP', `[Link](${target.displayAvatarURL({ size: 4096, dynamic: true, format: "webp"})})`, true)
        .addField('GIF', `[Link](${target.displayAvatarURL({ size: 4096, dynamic: true, format: "gif"})})`, true)
        .setImage(message.mentions.users.first().avatarURL({ size: 4096, dynamic: true}))
        .setTimestamp()
       message.channel.send({ embeds: [response]})


       
       


    }
}