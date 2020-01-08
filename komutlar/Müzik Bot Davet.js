const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('🧿Müzik Botun Davet Linki : https://www.kisa.link/M7dK :love_letter:(BAKIMDA!!)');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Müzik', 'müzik', 'müzikbotu'],
  permLevel: 0
};

exports.help = {
  name: 'Müzikbotu',
  description: 'Müzik botun davet linkini gönderir.',
  usage: 'Müzikbotu'
};
