export default {
    name:"artistiksoz",
    cooldown: 5,
    execute(message) {
    

  

        
        const artistiksozlist = [`böcek olmayı kabullenenler, ezilince şikayet etmemelidirler.` , `kimileri seviyorum der, çünkü ezberlemiştir. kimileri diyemez, çünkü gerçekten sevmiştir.` , `ben günessem sen aysın benim doğduğum yerde sen batarsın` , `apartman lambasının bile fark etmediği insanlarla uğraşıyoruz.` , `seni adam ederdim ama çoktan köpeğim olmuşsun, ne lüzumu var.` , `senin gibi bozuklukları kumbarada biriktirir ve geleceğe yatırım yaparım.` , `lütfen insan taklidi yapma yakışmıyor.` , `eksik olmayın dedik ama siz fazla olmaya başladınız.`]
        const random = Math.floor(Math.random() * artistiksozlist.length)
    
    message.reply(`${artistiksozlist[random]}`)
    

 
 
 
 
 }}