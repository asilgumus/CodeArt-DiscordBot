process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


import { Client, Collection, MessageEmbed } from "discord.js"
import'dotenv/config'
import {readdirSync } from "fs"

const client = new Client({
    intents: [32767],
    presence: {status: "idle", activities: [{name: "Sunucuyu", type: "WATCHING"}] }
})

    export default client;

    readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default)
    event(client)
})
//Command Handler
client.commands = new Collection()
readdirSync("./commands").forEach(category => {


    readdirSync(`./commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`).then(c => c.default)
        client.commands.set(command.name, command)
    })
})





client.login(process.env.token)