const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'ODMwMjIwNDkyOTAwMTM5MDQ5.YHDhFg.zkpjZGZ-O4Et7mtofekHOOIZaiE';
const prefix = '$';

bot.on('ready', () => {
    console.log('Bot is online')
})

bot.on("message", message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'hi') {
        message.reply('Hey man');
    }
    if (command === 'help') {
        message.channel.send('Ask the owner')
    }
    if (command === 'test') {
        message.channel.send('I am online!')
    } else
        if (command === 'banish') {

            if (message.member.hasPermission('ADMINISTRATOR')) {
                const userBan = message.mentions.users.first();

                if (userBan) {
                    var member = message.guild.member(userBan);

                    if (member) {
                        member.ban({
                            reason: 'You\'re dumb'
                        }).then(() => {
                            message.reply(`The idiot was banned from the server.`)
                        })
                    } else {
                        message.reply('That user is not in this server.');
                    }
                } else {
                    message.reply('Who am I banning?')
                }
            } else {
                message.reply('You\'re not an admin dummy')
            }
        }
})

bot.login(token);