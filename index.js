const Discord = require('discord.js')

const fs = require('fs')

const cron = require('node-cron')

const config = require('./config.json')
const token = require('./tokens.json')

const bot = new Discord.Client()

// Bot Startup
bot.on('ready', async () => {
    console.log(`${bot.user.username} Online!`)
    bot.user.setActivity("The 2006 Royal Rumble", {
        type: "WATCHING"
    })
    bot.user.setStatus("dnd")
})

// Load Commands
bot.command = new Discord.Collection()
fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err)
    let commandFiles = files.filter(f => f.split('.').pop() === 'js')
    if (commandFiles.length <= 0) {
        console.error('No Commands Found')
        return
    }
    
    console.log(`Loading ${commandFiles.length} commands...`)
    commandFiles.forEach((f, index) => {
        const props = require(`./commands/${f}`)
        console.log(`${index + 1}: ${f} loaded!`)
        bot.command.set(props.help.name, props)
    })
})

// Message Event
bot.on("message", async message => {
    if (message.author.bot) return // If a bot sends the message
    if (message.channel.type === "dm") return // If its a dm to the bot

    const prefix = config.prefix
    const content = message.content.toLowerCase()

    const cmd = bot.command.get(content)
    if (cmd) {
        cmd.run(bot, message)
    }

    // Kill Command (Leave in here as a backup)    
    if ((message.author.id === token.me) &&
        (content === `${prefix}kill`)) {
        console.log('kill command issued')
        return bot.destroy()
    }
})

// Schedule Event
//cron.schedule('12 15 * * *', () => {    
cron.schedule('19 6,18 * * *', () => {    
    console.log('It\'s 6:19')
    channelString = token.CID.toString()
    const outputChannel = bot.channels.get(channelString)
    outputChannel.send('BOOYAKA BOOYAKA, SIX ONE NINE')
})

bot.login(token.token)