const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    message.delete();

if (mesaj.length < 1) return message.reply('Yazini Yaz');
  message.channel.sendCode("asciidoc", `
  < ${mesaj} >
  -------------------------------------------------------------------------------------------------------------------------------
          \    ^__^
           \   (00)\_______
              (__)\       )--*
               🔔 ||----w||
                  ||     || `);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['aslı','inek'],
  permLevel: 0
};

exports.help = {
  name: 'aslı (inek)',
  description: 'inek',
  usage: 'inek'
};