const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require('node-cron');

client.on('ready', () => {
  console.log('You are now logged in as ${client.user.tag}!');
});

// Typing "booyaka booyaka" will make the bot reply with the 619 ascii
client.on('message', msg => {
  if (msg.content === 'booyaka booyaka') {
    msg.reply('REAPLCE ME WITH 619 ASCII');
  }
});

// function to say "BOOYAKA BOOYAKA" in #spam
function scheduledBooyaka() {
  client.channels.get('spam').send('BOOYAKA BOOYAKA')
  console.log('Booyaka Delivered');
};

// Schedule to call the booyaka function at 6:19 AM (and hopefully PM)
cron.schedule('19 6 * * *', () => {
  console.log('It\'s 6:19');
  scheduledBooyaka();
});

// Bot Login
client.login('TODO Token');