const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('🧿Bot Davet Linki : https://goo.gl/p6Ykim :love_letter:');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botdavet','bot davet'],
  permLevel: 0
};

exports.help = {
  name: 'Botun davet linki',
  description: 'Botun davet linkini gönderir.',
  usage: 'Botdavet'
};
