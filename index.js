const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("ODMyMjQzNTUzMjM3MzM2MTQ0.YHg9NQ.WxXuFIPHI8zvG5m_XPmfPmpD1eM") //Your own token, thus one sadly won't work :P
