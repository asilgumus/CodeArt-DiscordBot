export default {
    name:"ozlusöz",
    cooldown: 5,
    execute(message) {
    



  

        
        const ozlusozlerlist = [`ölüm dediğin nedir gülüm ben senin için yaşamayı göze aldım` , "ya susmak ya da suskunluktan daha kıymetli bir söz söylemek gerekir. - Pisagor" , `kazanırsan, açıklamana gerek yok… kaybedersen, açıklamak için orada olmamalısın! - Adolf Hitler` , `unutma senin için başkasından vazgeçen , bir gün mutlaka başkası için senden vazgeçer. - Hz.Mevlana` , `inandığınız gibi yaşamazsanız yaşadığınız gibi inanmaya başlarsınız. - Hz. Ömer`]
        const random = Math.floor(Math.random() * ozlusozlerlist.length)
    
    message.reply(`${ozlusozlerlist[random]}`)
    

 
 
 
 
 }}