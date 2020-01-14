const ASCII = require('ascii-art')
ASCII.Figlet.fontPath = './fonts/'

const fontList = [
    'doom',
    'graffiti',
    'doh',
    '3x5',
    'alligator2',
    'banner'
]

module.exports.run = async (bot, message) => {
    const rand = fontList[Math.floor(Math.random() * fontList.length)]
    if (rand) {
        ASCII.font('619', rand, async image => {
            console.log('Someone said the thing')
            console.log('rand #: ' + rand)
            message.channel.send(image, {
                code: 'md'
            })
        })
    }
    else {
        return message.channel.send('6 1 9')
        console.error('rand fail')
    }
}

module.exports.help = {
    name: "booyaka booyaka"
}
