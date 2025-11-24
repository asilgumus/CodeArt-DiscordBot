export default {
    name:"sesliunmute",
    cooldown: 5,
    permission: "MUTE_MEMBERS",
    execute(message, args) {
  const target  = message.mentions.members.first()
  



            target.voice.setMute(false)
        message.reply({ content: `${target} Kişisinin Susturunu Açtım`})
    }
}