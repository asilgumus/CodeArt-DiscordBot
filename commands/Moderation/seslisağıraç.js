export default {
    name:"seslisağıraç",
    cooldown: 5,
    permission: "MUTE_MEMBERS",
    execute(message, args) {
  const target  = message.mentions.members.first()
  



            target.voice.setDeaf(false)
        message.reply({ content: `${target} Kişisinin Sağırını Başarıyla Açtım.`})
    }
}