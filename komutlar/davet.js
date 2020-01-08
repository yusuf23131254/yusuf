const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message) {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(':envelope:Sunucunun Davet Linki : https://discord.gg/Rg69MGk :envelope:Botu Sunucunuza Eklemek İçin !Botdavet');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Sunu davet', 'sunucu davet et', 'sunucu ekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Sunucunun davet linkini gönderir.',
  usage: 'davet'
};