export default {
    name:"seslicek",
    cooldown: 5,
    permission: "MOVE_MEMBERS",
    execute(message, args) {
  const target  = message.mentions.members.first()
  
  if(target.id == "746458448669048863") return message.reply("Bot Sahibini Çekemezsin!")


  if (!message.member.voice.channelId)
    return message.reply("**Bir Ses Kanalında Değilsin!**");

            target.voice.setChannel(message.member.voice.channelId)
        message.reply({ content: `${target} Kişisini Başarıyla Kanala Çektim`})
    }
}