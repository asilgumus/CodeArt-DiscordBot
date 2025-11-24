import { MessageEmbed } from "discord.js"
  
export default {
    name:"userinfo",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const target = message.mentions.members.first() || message.author;
        const member = message.guild.members.cache.get(target.id);
        if(!target) return message.reply("Bir kişi belirtmelisin.")
        let arr = []
        target._roles.map((d, i) =>arr.push( `${i + 1}. ${message.guild.roles.cache.get(d).name}`))
        arr.join("\n")


       

        const response = new MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(target.displayAvatarURL())
        .setTimestamp()
        .addFields(
            {name: "İsmi:", value: `**${target.user.tag}**`, inline: false },
            {name: "Discord ID:", value: `**${target.id}**`, inline: false },
            {name: "Sunucudaki Rolleri", value: `**${arr}**`, inline: false },
            {name: "Sunucuya Katıldığı Tarih", value: `**${new Date(member.joinedAt).toLocaleDateString() }** \n ${(member.joinedAt).toLocaleTimeString()}`, inline: false },
            {name: "Discorda Katıldığı Tarih", value: `**${new Date(target.user.createdAt).toLocaleDateString() }** \n ${(target.user.createdAt).toLocaleTimeString()}`, inline: false },
        )
        message.reply({ embeds: [response]})



        
        

    }
}