export default {
    name:"seslimute",
    cooldown: 5,
    permission: "MUTE_MEMBERS",
    execute(message, args) {
  const target  = message.mentions.members.first()
  
  if(target.id == "746458448669048863") return message.reply("Bot Sahibini Susturamazsın!")


            target.voice.setMute()
        message.reply({ content: `${target} Kişisini Başarıyla Susturdum`})
    }
}