const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
require("moment-duration-format");

var prefix = ayarlar.prefix;
  
module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
     "instagram welegendss",
     "YouTube welegendss",
     "İnstagram Yusufsamipkr.mp4"

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.instagram.com/welegendss/","https://www.youtube.com/channel/UCEaStBktV_4477z0owHg0ig?view_as=subscriber");
        }, 2 * 2500);
};