const Discord = require('discord.js');
exports.run = function(client, message, args) {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`📸\n Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor(0xf7dc46));
   }


exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['avatarım ','profil'],
 permLevel: 0
};

exports.help = {
 name: 'pp',
 description: 'Avatarınızı Atar ',
 usage: 'pp'
};
