export default {
    name:"askolcer",
    cooldown: 5,
    execute(message) {
        const target = message.mentions.members.first()  
        const member = message.guild.members.cache.get(target.id);
        const random = Math.floor(Math.random() * 100) + 1;

        message.reply(`${target} ile ${member} kişisinin arasındaki aşk oranı ${random}`)

    

 
 
 
 
 }}