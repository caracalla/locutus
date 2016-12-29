var config = {
  channels: ["#locutus"], //["#projectjen"],
  server: "irc.foonetic.net",
  botName: "locutus"
};

var irc = require("irc");

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.addListener("message#locutus", function (nick, text) {
  bot.say("#locutus", "hi " + nick);
});
