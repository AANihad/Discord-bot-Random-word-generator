
var Discord = require('discord.io');
var logger = require('winston');
// var auth = require('./auth.json');
var randomWords = require('random-words');
var prefix ='!'
// Configure logger settings
logger.remove(logger.transports.Console)
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    // token: auth.token,
	token: "OTY3NDQ0NDc1NzI1MDkwODE2.YmQY4Q.v81OgdvNu7WHpLe8J-WbDo9wVng",
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    bot.sendMessage({
        to: "general",
        message: "I'm ready"})
});

var blockedUsers=[];
bot.on('message', function (user, userID, channelID, message, evt) {

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if ((channelID == "wheel")&&(message.substring(0, 1) == '!')) {
    // if (message.content.startsWith(prefix) && (channelID == "general")){
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
            case 'spin':
                // u = client.users.fetch(userID);
                // if (blockedUsers.includes(userID))
                    // u.send("You already spinned the wheel")
                // else{
                    // u.send("||"+randomWords({ exactly: 3, join: " - " })+"||");
                    
                    bot.sendMessage({
                        to: channelID,
                        message: (randomWords({ exactly: 3, join: " - " }))
                    });
                    blockedUsers.add(userID)
                break;
                //}
            
        }
    }
});