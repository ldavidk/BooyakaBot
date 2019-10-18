const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require('node-cron');
var fs = require('fs');

client.on('ready', () => {
  console.log('You are now logged in as ${client.user.tag}!');
});

// Typing "booyaka booyaka" will make the bot reply with the 619 ascii
client.on('message', msg => {
  if (msg.content === 'booyaka booyaka') {
    msg.reply('6 1 9');
  }
});
/*
so my plan with the above is to eventually be able to randomize which
version of the art gets sent
For now/testing ill keep it a simple 6 1 9
*/

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
var key = fs.readFileSync('./private-dc-keys.txt', 'utf8');
client.login(key);