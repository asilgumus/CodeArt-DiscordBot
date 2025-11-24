import { MessageEmbed } from "discord.js"

export default {
    name:"oylama",
    cooldown: 10,
    execute(message, args) {

       

        let question = args.join(' ');

        const response = new MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        .addFields(
        {name: "Oylama", value: `\n\u200b`, inline: true },
        {name: `${question}`, value: `\n\u200b`, inline: false });
        
         
   
        message.reply({ embeds: [response]}).then(embedMessage => {
            embedMessage.react("✅");
            embedMessage.react("❌");
        });

    }}


        
    
    
