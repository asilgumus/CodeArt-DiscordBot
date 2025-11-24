
import { MessageEmbed } from "discord.js"


export default {

    name:"yardım",
    cooldown: 3,
    execute(message, client) {



        
        const response = new MessageEmbed()
        
        .setAuthor({ name: "Sanguis Bot Komutları"})
        .setDescription("Botumuzun Komutları Sizlerle.\n\u200b")
        .setColor([43, 170, 255])
        .setFooter({text: "Sanguis Botumuz Hizmetinizde!"})
        .setTimestamp()
        .setThumbnail(message.guild.iconURL())    
        .addFields(
    
        {name: "Komutlar", value: "-------------------"},
        {name: "Bot Komutları", value: "-------------------"},
        {name: ".ping", value: "Botun Ve Sunucun Gecikmesini Gösterir"},
        {name: ".serverinfo", value: "Sunucunun Bilgilerini Verir"},
        {name: ".userinfo { kişi }", value: "Kişinin Bilgilerini Verir"},
        {name: ".avatar { kişi }", value: "Kişinin Avatar Resmini Verir"},
        {name: ".oylama { oylama sebebi }", value: "Oylama Başlatır"},
        {name: "Eğlence Komutları", value: "-------------------"},       
     //   {name: ".söv", value: "Küfür Etme Panelini Açar"},
        {name: ".sözler", value: "Sözler Panelini Açar"},
        {name: ".Genel Komutlar", value: "-------------------"},
        {name: ".avatar { kişi }", value: "Kişinin Avatarını Verir"},
        {name: ".bilgi", value: "Bot Bilgisi Verir"},
        {name: ".yardım", value: "Bu Paneli Açar :)"},
        {name: "Moderasyon Komutları", value: "-------------------"},
        {name: ".ban { kişi } ( isteğe bağlı sebep )", value: "Kişiyi Sunucudan Yasaklar"},
        {name: ".clear {Silinecek Mesaj Sayısı}", value: "Kanaldaki Mesajları Siler"},
        {name: ".warn { kişi } ( isteğe bağlı sebep )", value: "Belirtilen Kişiyi Uyarır"},
        {name: ".seslicek { kişi }", value: "Hedef Kişiyi Bulunulan Kanala Çeker"},
        {name: ".kick { kişi } ( isteğe bağlı sebep )", value: "Kişiyi Sunucudan Atar"},
        {name: ".rolver { kişi } { rol }", value: "Kişiye Belirtilen Rolü Verir"},
        {name: ".rolal { kişi } { rol }", value: "Kişiden Belirtilen Rolü Alır"},
        {name: "Kategorize Edilmemiş Komutlar", value: "-------------------"},  
        {name: "Sohbet Komutları", value: "selam gibi komutlar"}
        
        
        
        
        
    
)
        message.reply({embeds: [response] })
    }
}

