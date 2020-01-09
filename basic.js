const Discord = require('discord.js');

const token = require('./tokens.json');
const CID = require('./tokens.json');

const cron = require('node-cron');

const client = new Discord.Client();

const ascii = require('ascii-art');

client.once('ready', () => {
  console.log('BooyakaBot Online!');
});

// Typing "booyaka booyaka" will make the bot reply with the 619 ascii
client.on('message', message => {
  if (message.content === 'booyaka booyaka') {
    // const text = '619'
    // ascii.font(text, 'Doom', async body => {
    //   message.channel.send(body, {
    //     code: true
    //   })
    //   console.log('Did someone say booyaka?');
    // });
    
    message.channel.send('REEEEEEEE');
  };
});
/*
so my plan with the above is to eventually be able to randomize which
version of the art gets sent
For now/testing ill keep it a simple 6 1 9
*/

// function to say "BOOYAKA BOOYAKA" in #spam
function scheduledBooyaka() {
  const channel = client.channels.get(CID.CID);
  channel.send('BOOYAKA BOOYAKA, SIX ONE NINE');
  console.log('Booyaka Delivered');
};

// Schedule to call the booyaka function at 6:19 AM (and hopefully PM)
cron.schedule('19 6,18 * * *', () => {
//cron.schedule('10 15 * * *', () => {
  console.log('It\'s 6:19');
  scheduledBooyaka();
});


// Bot Login
client.login(token.token);