const Discord = require('discord.js');
const config = require('./token.json');
const cron = require('node-cron');
const fs = require('fs');

const client = new Discord.Client();


client.once('ready', () => {
  console.log('BooyakaBot Online!');
});

// Typing "booyaka booyaka" will make the bot reply with the 619 ascii
client.on('message', message => {
  if (message.content === 'booyaka booyaka') {
    console.log('Did someone say booyaka?');
    message.channel.send('6 1 9');
  }
});
/*
so my plan with the above is to eventually be able to randomize which
version of the art gets sent
For now/testing ill keep it a simple 6 1 9
*/

// function to say "BOOYAKA BOOYAKA" in #spam
function scheduledBooyaka() {
  const channel = client.channels.get('634859447843422208')
  channel.send('BOOYAKA BOOYAKA')
  console.log('Booyaka Delivered');
};

// Schedule to call the booyaka function at 6:19 AM (and hopefully PM)
cron.schedule('58 18 * * *', () => {
  console.log('It\'s 6:19');
  scheduledBooyaka();
});


// Bot Login
client.login(token.token);