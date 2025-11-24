
import { MessageEmbed } from "discord.js"


export default {

    name:"kurallar",
    cooldown: 3,
    execute(message) {


    const response = new MessageEmbed()
        .setAuthor( {name: "Sanguis Bot"} )
        .setDescription("Bot Komutları Sizlerle.")
        .setColor("RANDOM")
        .setFooter({text: "Sanguis Botumuz Hizmetinizde!"})
        .setTimestamp()
        .setThumbnail(message.guild.iconURL())
        .addFields(
        {name: "1. Kavga başlatmak / sürdürmek yasaktır", value: "\n\u200b"},
        {name: "2. Cezadan kaçmak amaçlı yan hesap ile sunucuya katılmak yasaktır", value: "\n\u200b"},
        {name: "3. Kişi, görüş veya fikir aşağılama yasaktır", value: "\n\u200b"},
        {name: "4. Zararlı yazılım içerikli dosya / bağlantı paylaşımı yasaktır", value: "\n\u200b"},
        {name: "5. Reklam yapmak yasaktır", value: "\n\u200b"},
        {name: "6. NSFW olarak işaretlenmeyen kanallarda pornografi içerikli paylaşım yasaktır", value: "\n\u200b"},       
        {name: "7. Küfür ve hakaret içerikli mesaj veya resim paylaşımı yasaktır", value: "\n\u200b"},
        {name: "8. Şahıs, marka veya yazılım kötüleme yasaktır", value: "\n\u200b"},
        {name: "9. Korsan yazılım paylaşılması veya teşvik edilmesi yasaktır.", value: "\n\u200b"},
        {name: "10. Discord T.O.S'a aykırı her türlü davranış yasaktır", value: "\n\u200b"},
        {name: "11. Profil fotoğrafı, kullanıcı adı veya durum mesajında uygunsuz içerik bulunması yasaktır", value: "\n\u200b"},
        {name: "12. Kanalları amacı dışında kullanmak yasaktır", value: "\n\u200b"},
        {name: "13. Kullanıcılara rahatsızlık verme (sürekli etiketleme vb.) yasaktır", value: "\n\u200b"},
        {name: "14. Kullanıcıları yanlış yönlendirmek (bilmediği konu hakkında yorum yapmak vb.) yasaktır", value: "\n\u200b"},
        {name: "15. Spam, flood yapmak yasaktır", value: "\n\u200b"},
        {name: "16. Yetkililere gereksiz yere özelden yazmak yasaktır", value: "\n\u200b"}
        
        
            )

       message.channel.send({ embeds: [response]})
       message.delete();
 

        }}