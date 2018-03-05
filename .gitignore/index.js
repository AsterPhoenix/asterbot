const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function()    {
    bot.user.setGame("Fort Boyard Man ?");
    console.log("Bot ON !");
});

bot.login("NDE2MjIwMDMzMjY2NzQ1MzQ0.DX7RGg.fsK__pyqLRKYSxJF6e7PrL8qOHM");
