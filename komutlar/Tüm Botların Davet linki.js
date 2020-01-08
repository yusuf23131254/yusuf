const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('🧿Müzik Botu Bakımda... . \n 🧿WeLegends Botun Davet Linki : https://goo.gl/p6Ykim :love_letter: \n 🧿CHYRODIN CREW Botun Davet Linki : https://goo.gl/F6vmMQ :love_letter: ');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botlar', 'tümbotlar'],
  permLevel: 0
};

exports.help = {
  name: 'davetler',
  description: 'botların davet linkini gönderir.',
  usage: 'davetler'
};
