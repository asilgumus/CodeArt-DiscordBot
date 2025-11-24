import "discord.js"



export default {
    name: "clear",
    cooldown: 5,
    permission: "MANAGE_MESSAGES",

    async execute(message, args, client) {


        const amount = args[0];

        if (amount <= 0) return  message.reply("Lütfen 0'dan Büyük Bir Değer Giriniz")
        if (amount && isNaN(amount)) return message.reply(`Bir sayı giriniz`);

        const amountParsed = parseInt(amount);

        if (amount> 100) return message.reply("100'den Fazla Mesaj Silemezsin")

       const msg = await  message.reply(`${amountParsed} Kadar Mesaj Silindi!`);
       setTimeout(() => msg.delete(), 2000);

      const msg2 = await  message.channel.bulkDelete(amountParsed).catch(err => message.reply("14 Günden Eski Mesajlar Silinemez"))

      setTimeout(() => msg2.delete(), 2000);


    }
}