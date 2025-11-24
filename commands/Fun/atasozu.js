export default {
    name:"atasozu",
    cooldown: 5,
    execute(message) {
    

        
const atasozu = [`Ateş olmayan yerden duman çıkmaz.` , `Attan düşen ölmez, eşekten düşen ölür.` , `az kazanan çok kazanır, çok kazanan hiç kazanır` , `Aç koyma hırsız olur, çok söyleme yüzsüz olur, çok değme arsız olur.` , `Besle kargayı oysun gözünü.` , `Bu dünya iki kapılı handır, gelen bilmez giden bilmez.` , `Dişi kuş yapar yuvayı, içini dışını sıvayı sıvayı.` , `Gelin bindi deveye gör kısmeti nereye.`]
const random = Math.floor(Math.random() * atasozu.length)
    
message.reply(`${atasozu[random]}`)
    

 
 
 
 
 }}