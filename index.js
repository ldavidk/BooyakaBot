const Discord = require("discord.js")
const config = require("./config.json")
const token = require("./tokens.json")

const bot = Discord.client()

bot.on('ready', async () => {
    console.log(`${bot.user.username} Online!`)
})

