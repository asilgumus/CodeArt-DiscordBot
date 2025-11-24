import { MessageEmbed } from "discord.js"
import cooldown_control from "../utils/cooldown_control.js"

const OWNER_ID = process.env.OWNER_ID;

export default client => {

    const prefix = process.env.prefix
    console.log(prefix)


    client.on("messageCreate", message => {



        if (message.content.startsWith(prefix) == false) return

        const args = message.content.slice(1).trim().split(/ +/)
        const commandName = args.shift().toLowerCase()
        if(!client.commands.has(commandName)) return;
        const command = client.commands.get(commandName)
        
       
       
        // Permission Control

        if (command.permission && (!message.member.permissions.has(command.permission) && message.author.id !== OWNER_ID))  return message.reply(`Bu Komutu Kullanmak İçin En Az \`${command.permission}\` Yetkisine Sahip Olmanız Gerekiyor!`)


        //Cooldown Control
        const cooldown = cooldown_control(command, message.member.id)
        if(cooldown) return message.reply(`Bu Komutu Tekrar Kullanmak İçin \`${cooldown}\` Saniye Beklemelisiniz`)

        try {
            command.execute(message, args, client)
        } catch (e) {
            console.error(e)
            message.reply("Bu Komutta Şu Anda Hata Var")
        }


        if(message.content.toLowerCase() == "sa") {
            message.reply("Aleyküm Selam")
        }
    })



    client.on("messageCreate", message2 => {
        if(message2.content.toLowerCase() == "selamun aleyküm") {
            message2.reply("Aleyküm Selam")
        }
    })

    client.on("messageCreate", message3 => {
        if(message3.content.toLowerCase() == "selamın aleyküm") {
            message3.channel.send("Selamun*")
        }
    })


client.on("messageCreate", message4 => {
    if(message4.content.toLowerCase() == "selamunaleyküm") {
        message4.reply("Aleyküm Selam")
    }
})


client.on("messageCreate", message => {
    if(message.content == "bilgi") {
        message.reply("Lütfen Komutlarımızı Prefix İle Kullanın")
    }
})




//.bilgi







//.yardım







client.on("messageCreate", message6 => {
    if(message6.content == "yardım") {
        message6.reply("Lütfen Komutlarımızı Prefix İle Kullanın")
    }
})

client.on("messageCreate", message7 => {
    if(message7.content == "youtube") {
        message7.reply("Lütfen Komutlarımızı Prefix İle Kullanın")
    }
})




client.on("messageCreate", msg => {
    if(msg.content == "sa") {
        msg.reply("Aleyküm Selam")
    }
})
}