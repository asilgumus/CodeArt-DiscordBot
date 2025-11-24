import { MessageEmbed } from "discord.js"


export default {
    name:"ping",
    cooldown: 20,
    execute(message) {


      
        
        const discord_ping = message.client.ws.ping
        const bot_ping = Math.abs(Date.now() - message.createdTimestamp)


        const response = new MessageEmbed()
        .setColor("GREEN")
        .addFields(
            {name: "Discord Gecikmesi", value: `${discord_ping} ms`, inline: true },
            {name: "Bot Gecikmesi", value: `${bot_ping} ms`, inline: true },
        )
        
       message.reply({ embeds: [response]})

    }
}