export default {
    name:"sesliat",
    cooldown: 5,
    permission: "MOVE_MEMBERS",
    execute(message, args) {
  const target  = message.mentions.members.first()
  
  if(target.id == "746458448669048863") return message.reply("Bot Sahibini Sesten Atamazsın.")


  if (!message.mentions.members.first())
    return message.reply("**Hedef Ses Kanalında Değil!**");

            target.voice.disconnect(message.member.voice.channelId)
        message.reply({ content: `${target} Kişisini Başarıyla Kanaldan Attım`})
    }
}