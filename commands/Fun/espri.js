export default {
    name:"espri",
    cooldown: 5,
    execute(message) {


        const espri = [`Aaa siz çok terlemişsiniz durun size terlik getireyim` , `Seni görünce gözlerim dolar kulaklarım euro` , `adamın biri gülmüş saksaya koymuşlar` , `Bak şu karşıdaki uçak pisti, hala temizlemediler` ,  `Adamın kafası atmış bacakları eşşek`]
        const random = Math.floor(Math.random() * espri.length)
    
    message.reply(`${espri[random]}`)
    

 
 
 
 
 }}