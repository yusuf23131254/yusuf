const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa chat') {
    msg.reply('Aha sahibim geldi Oley :P');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.reply('aleyküm selam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bana mı sordun knka') {
    msg.reply('bana sor duysan valla nasıl olayım iş güç 7/24 iş yani');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nbr knka') {
    msg.reply('bana mı sordun knka');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hoş bulduk') {
    msg.reply('Nasılsın iyimisin keyifler nasıl');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi nolsun') {
    msg.reply('iyi iyi Allah Daha İyi Etsin');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hb') {
    msg.reply('nasıl sın iyimisin keyifler nasıl');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'İyi Geceler') {
    msg.reply('Sanada İyi Geçeler Allah Rahatlık Versin.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('Sanada İyi Geceler Allah Rahatlık Versin.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ne oynuyorsun knka') {
    msg.reply('oyun');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nbr') {
    msg.reply('iyi senden');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yusuf') {
    msg.reply('https://www.instagram.com/yusufsamipkr.mp4/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'we legends') {
    msg.reply('https://www.instagram.com/welegendss/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'welegends') {
    msg.reply('https://www.instagram.com/welegendss/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'we') {
    msg.reply('https://www.instagram.com/welegendss/');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'legends') {
    msg.reply('https://www.instagram.com/welegendss/');
  }
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
