const Discord = require("discord.js")
exports.run =  async (client, message, args) => {
  if (!message.hasPermission("MANAGE_SERVER")) return message.reply("Disable")
    if(args[0])
      message.channel.send("ID: ${client.user.id} \n\n Uptime: ${duration}")
}