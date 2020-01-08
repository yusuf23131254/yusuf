const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['İlahi Azrail. Sen adamı öldürürsün','Sinemada on dk ara dedi aradim aradim açmadi','En çok eşek yavrusu nerde bulunur? - Tabiki spa merkezinde','bi gün gelip sikicem yanına boyfriendini','Turkiyenin en yeni şehri - nevşehir'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};