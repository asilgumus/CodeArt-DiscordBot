import { readFile, writeFile } from 'fs/promises';

export default {
    name: "unmute",
    cooldown: 10,
    permission: "MUTE_MEMBERS",
    async execute(message, args) {

        const rawData = await readFile('C:/Users/90535/Desktop/MssBOT/user_roles.json', 'utf-8');
        const jsonData = JSON.parse(rawData);
        const target = message.mentions.members.first();

        const targetId = target?.id;
        if (!target) return message.reply("Please mention a user that you want to unmute!");
        if (!message.member.permissions.has('MUTE_MEMBERS')) {
            return message.reply("You do not have the required permissions to use this command.");
        }
        const role = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!role) return message.reply("No role named 'Muted' found on the server.");

        const kisiyibul = message.guild.members.cache.get(targetId);

        const user = jsonData.user.find(u => u.id === targetId); // 🔧 HATA BURADA DÜZELTİLDİ

        console.log(user);
        console.log(jsonData);

        if (user) {
            console.log("Kullanıcı bulundu!");
            kisiyibul.roles.remove(role).then(a => {
                console.log("muted rolü alındı");
            }).catch(err => {
                console.error(err);
                return message.channel.send("I couldn't unmute!");
            });

            console.log("Kullanıcı rolleri:", user.roles);
            kisiyibul.roles.add(user.roles);
            message.reply("Unmuted!");

            jsonData.user = jsonData.user.filter(z => z.id !== targetId); // 🔧 sadece diziyi değil, tüm objeyi güncelle
            await writeFile('C:/Users/90535/Desktop/MssBOT/user_roles.json', JSON.stringify(jsonData, null, 2), 'utf-8');
        } else {
            message.reply("User is not muted");
        }
    }
};
