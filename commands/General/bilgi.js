
const DEVELOPER_NAME = process.env.DEVELOPER_NAME || "Asil Doğan Gümüş";
const DEVELOPER_ID = process.env.DEVELOPER_ID || "746458448669048863";

import { MessageEmbed } from "discord.js"


export default {

    name:"bilgi",
    cooldown: 3,
    execute(message, client) {


const response = new MessageEmbed()
        .setAuthor({ name: "XJR"})
        .setDescription("XJR BOT")
        .setColor([115, 0, 222])
        .setFooter({text: "XJR Botu Hizmetinizde!"})
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        .addFields(
            
            {name: "Devoloper", value: DEVELOPER_NAME, inline: true},
            {name: "ID", value: DEVELOPER_ID, inline: true},
            {name: "Ping", value: "Ping'e Erişmek İçin Lütfen .ping Yazınız", inline: true},
            {name: "Ram Kullanımı", value: "68", inline: true},
            {name: "CPU Kullanımı", value: "37%", inline: true},
            {name: "Toplam Sunucu", value: "10", inline: true}
            
        )
        
       message.reply({ embeds: [response]})

        }}
