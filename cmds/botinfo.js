const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  let embed = new Discord.RichEmbed();
  let bicon = client.user.displayAvatarURL
  .setThumbnail(bicon)
  .setAuthor("***Bot information***", bicon)
  .addField("Name", `${client.user.username.tag}`)
  .addField("Created", `${client.user.createdAt}`)
  .addField("ID", `${client.user.id}`)
  .addField("Author", "<>#7343")
  message.channel.send(embed)
}