import { MessageEmbed } from "discord.js"
  
export default {
    name:"serverinfo",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {




        const response = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("ServerInfo")
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        .addFields(

            {name: `**> Sunucu Sahibi ID**`, value:`${message.guild.ownerId}`},
            {name: `**> Kullanıcı Sayısı**`, value:`${message.guild.memberCount}`},
            {name: `**> Sunucu Adı**`, value:`${message.guild.name}`},
            {name: `**> Sunucu ID**`, value:`${message.guild.id}`},
            {name: `**> Emoji Sayısı**`, value:`${message.guild.emojis.cache.size}`},
            {name: `**> Kanal Sayısı**`, value:`${message.guild.channels.cache.size}`},
           
           
        )
        message.reply({ embeds: [response]})



        
        

    }
}