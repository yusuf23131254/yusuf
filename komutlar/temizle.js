const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('Yeter Bence Bayılcam. https://tenor.com/view/the-daily-show-john-stewart-bored-frustrated-enough-gif-3403904');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj siliyorum!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil, süpür'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'sil <temizlenecek mesaj sayısı>'
};
