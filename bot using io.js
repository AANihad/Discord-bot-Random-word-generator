
var Discord = require('discord.io');
var logger = require('winston');
// var auth = require('./auth.json');
var randomWords = require('random-words');

// Configure logger settings
logger.remove(logger.transports.Console)
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

const verbs = ["dine", "face", "authorise", "charge", "dump", "penny", "migration", "glacier", "reality", "treaty", "move", "horoscope", "persist", "restoration", "texture", "tease", "hostility", "leftovers", "link", "candidate", "recruit", "ministry", "conglomerate", "fresh", "elect", "north", "copper", "bang", "twitch", "good", "angle", "night", "buffet", "village", "outlet", "material", "disappointment", "muggy", "treat", "principle", "pension", "pour", "us", "empire", "play", "behave", "scream", "commemorate", "menu", "unlike", "derive", "chase", "convert", "found", "nod", "acquire", "resign", "care", "rush", "order", "cook", "perform", "trace", "devise", "hit", "walk", "award", "undertake", "celebrate", "rain", "hold", "wake", "trade", "whisper", "adopt", "experience", "translate", "reward", "introduce", "damage", "file", "pass", "receive", "tour", "abandon", "depart", "heat", "time", "sort", "remain", "comply", "sense", "dominate", "sit", "afford", "dissolve", "facilitate", "trust", "begin", "fall", "exchange", "top", "hear", "access", "campaign", "slow", "exploit", "marry", "equip", "extract", "presume", "negotiate", "tend", "base", "recommend", "transmit", "open", "break", "bury", "cross", "cool", "call", "enable", "discharge", "encounter", "claim", "deal", "hide", "compete", "narrow", "exhaust", "handle", "evaluate", "undertake", "finish", "warn", "translate", "await", "spot", "squeeze", "imagine", "stimulate", "tax", "regret", "murder", "examine", "raise", "scream", "grow", "educate"];
const nouns = ["comparison", "debt", "session", "midnight", "permission", "poet", "restaurant", "statement", "device", "tradition", "depression", "youth", "currency", "power", "bedroom", "oven", "organization", "week", "ad", "king", "assignment", "agreement", "tale", "photo", "enthusiasm", "election", "conclusion", "event", "cigarette", "woman", "dirt", "addition", "application", "writing", "love", "collection", "apartment", "thanks", "cheek", "department", "assistant", "classroom", "entry", "tea", "road", "hotel", "elevator", "attitude", "connection", "height", "airport", "honey", "river", "assistant", "feedback", "quantity", "profession", "priority", "cookie", "heart", "protection", "difficulty", "method", "girl", "wood", "resolution", "song", "championship", "hall", "celebration", "computer", "effort", "housing", "problem", "drawing", "poem", "argument", "hospital", "construction", "memory", "accident", "connection", "foundation", "elevator", "winner", "flight", "insurance", "analysis", "failure", "gene", "queen", "importance", "possession", "replacement", "interaction", "lady", "income", "friendship", "poetry", "community", "appointment", "member", "employer", "measurement", "context", "speaker", "midnight", "clothes", "passion", "advertising", "lab", "complaint", "understanding", "scene", "leader", "improvement", "location", "literature", "death", "law", "anxiety", "category", "entertainment", "church", "information", "phone", "debt", "protection", "sample", "responsibility", "bird", "assistant", "indication", "thought", "replacement", "audience", "singer", "activity", "assistance", "girl", "gene", "buyer", "art", "two", "sector", "pollution", "teaching", "nature", "security", "airport"];
const adjectives = ["towering", "evasive", "tasty", "spotless", "plant", "immediate", "high", "overwrought", "amusing", "substantial", "selfish", "ready", "annoying", "bawdy", "plastic", "informal", "alike", "warm", "cuddly", "broken", "consistent", "few", "milky", "long", "unadvised", "groovy", "wasteful", "spotty", "perfect", "low", "psychotic", "jobless", "abundant", "silky", "interesting", "flimsy", "deserted", "reflective", "second-hand", "watery", "disagreeable", "raspy", "mean", "spooky", "grumpy", "messy", "psychedelic", "precious", "instinctive", "makeshift", "knotty", "protective", "strange", "tart", "curly", "damaging", "overwrought", "gruesome", "combative", "outgoing", "long", "irritating", "hypnotic", "pregnant", "parsimonious", "bloody", "shaky", "smooth", "gullible", "unsightly", "outstanding", "latter", "jaded", "fair", "godly", "lame", "testy", "helpful", "wide-eyed", "axiomatic", "alike", "depressed", "healthy", "acoustic", "loutish", "fine", "tawdry", "frantic", "literate", "vague", "muddled", "natural", "smart", "quirky", "plant", "orange", "sour", "wanting", "extra-large", "highfalutin", "naive", "quack", "quiet", "private", "hulking", "consistent", "foolish", "harmonious", "well-groomed", "guiltless", "complete", "aloof", "automatic", "boring", "abrasive", "shaky", "short", "staking", "brash", "elegant", "hallowed", "mighty", "scrawny", "dizzy", "brawny", "childlike", "direful", "enormous", "elated", "rhetorical", "tan", "brave", "inner", "psychedelic", "homeless", "conscious", "grumpy", "equable", "grandiose", "pastoral", "slim", "tight", "unsightly", "abiding", "aromatic", "abstracted", "unnatural", "incredible", "unwritten", "burly"];

// Initialize Discord Bot
var bot = new Discord.Client({
    // token: auth.token,
	token: process.env.DISCORD_RWG_BOT,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if ((message.substring(0, 1) == '!')) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        
        switch(cmd) {
            case 'spin':
                randomA = Math.floor(Math.random() * verbs.length);
                randomB = Math.floor(Math.random() * nouns.length);
                randomC = Math.floor(Math.random() * adjectives.length);
                rWords = "**Verb:** " +verbs[randomA]+"\n**Noun:** "+nouns[randomB]+"\n**Adjective:** "+adjectives[randomC]+"\n**Random:** "+randomWords({exactly: 1})

                console.log(user,userID)
                bot.sendMessage({
                    to: channelID,
                    message: (rWords)
                });
            break; 
        }
    }
});
