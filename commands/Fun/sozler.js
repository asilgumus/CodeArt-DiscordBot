import { MessageEmbed } from "discord.js"

export default {
    name:"sözler",
    cooldown: 3,
    execute(message) {
    


        const response = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Sözler")
    .addFields(
        {name:"Özlü Söz" ,value:".ozlusöz",inline:true},
        {name:"Artistik Söz",value:".artistiksöz",inline:true}
    )
    
    message.reply({ embeds: [response]})
            }
            }
 