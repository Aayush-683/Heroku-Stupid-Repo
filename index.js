const discord = require("discord.js")
const bot = new Discord.Client()

bot.on('ready', async bot => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', async message => {
    if(message.content == "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("Nzc1MjI2Nzg3OTk0MDA5NjMx.X6jQNQ.EK1nsLEtkbVbMxlOqXyycMJyyv4")
