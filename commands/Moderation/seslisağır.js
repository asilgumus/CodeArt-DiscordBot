export default {
    name:"seslisağır",
    cooldown: 5,
    permission: "MUTE_MEMBERS",
    execute(message, args) {
  const target  = message.mentions.members.first()
  



            target.voice.setDeaf()
        message.reply({ content: `${target} Kişisini Başarıyla Sağırlaştırdım.`})
    }
}