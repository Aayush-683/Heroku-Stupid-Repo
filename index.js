const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
      return message.channel.send("pong!" + bot.ws.ping)
    }
})

bot.login("Nzc1MjI2Nzg3OTk0MDA5NjMx.X6jQNQ.jmlzodbksWOvkZGV6JE7T46toWc")
