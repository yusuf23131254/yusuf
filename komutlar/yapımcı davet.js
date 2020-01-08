const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yapımcının Discord linki : https://discord.gg/NZ8RAyG :love_letter:');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı davet', 'yapımcının sunucusu', 'yapımcı', 'davet'],
  permLevel: 0
};

exports.help = {
  name: 'kurucu',
  description: 'kurucunun davet linkini gönderir.',
  usage: 'kurucu'
};
