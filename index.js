require("dotenv").config();

const Discord = require("discord.js");

const fs = require("fs");

const client = new Discord.Client();


fs.readdir("./events/", (err, files) => {

  files.forEach(file => {

    const eventHandler = require(`./events/${file}`);

    const eventName = file.split(".")[0];

    client.on(eventName, (...args) => eventHandler(client, ...args));

  });

});


const { Client, RichEmbed, Attachment } = require('discord.js');

prefix = ("!")




// Prints that the bot is ready in cmd

client.on('ready', () => {

  console.log(`Your Logged in as ${client.user.tag}!`);
  client.user.setActivity("Overwatch");

});




// The bot responds to these messages

client.on('message', msg => {

  if (msg.content === 'ping') {

    msg.reply('Pong!');

  }

});



// Embled messages





client.on('message', message => {

  if (message.content === '!zak') {

    const embed = new RichEmbed()

      .setTitle('Zak')

      .setColor(0xff2054)

      .setDescription('Zak is the coolest!');

    message.channel.send(embed);

  }

});



  // help command



  client.on('message', message => {

    if (message.content === '!help') {

      const embed = new RichEmbed()

        .setTitle('Help!')

        .setColor(0xff0000)

        .setDescription('Commands: !kitty !zak !rules');

      message.channel.send(embed);

    }

  });






// rules



  client.on('message', message => {

    if (message.content === '!rules') {

      const embed = new RichEmbed()
  
        .setTitle('Rules')

        .setColor(0xff0000)

        .setDescription('1. Don\'t spam in any channel. 2. Don\'t spam @ someone. 3. Use the appropriate channel. 4. Don\'t Piss off Zak or you will get banned. 5. Rocket is not a 12 yrd. 6. We do have some high ranked player in this server please do ask them to carry you.');

      message.channel.send(embed);

    }

  });






  // Welcome message



  client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'welcome');

    if (!channel) return;

    channel.send(`Welcome to the server, ${member}`);

  });



  // Attachments



  client.on('message', message => {

    if (message.content === '!kitty') {

        const attachment = new Attachment('https://cdn.discordapp.com/attachments/598134848624001024/600509015461593099/IMG_20180422_172851_882.jpg');

        message.channel.send(attachment);

    }

});


client.on('message', message => {

    if (message.content === '!rip') {

        const attachment = new Attachment('https://cdn.discordapp.com/attachments/433374418476204060/606606873067651142/w3duR07.png');

        message.channel.send(attachment);

    }

});


client.on('message', message => {

    if (message.content === '!kitty') {

        const attachment = new Attachment('https://media.discordapp.net/attachments/598134848624001024/600508902874021948/Snapchat-399090188.jpg');

        message.channel.send(attachment);

    }

});




client.login(process.env.BOT_TOKEN);
