const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Connecté en tant que ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login(process.envTOKEN);

// Create an event listener for messages
client.on('message', message => {
  // If the message is ".avatar"
  if (message.content === '.avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL , "Voici votre photo de profil")
    
  }
});
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bienvenue sur le serveur : ${member}`);
  });
  // get role by ID
let myRole = message.guild.roles.get("264410914592129025");
​
// get role by name
let myRole = message.guild.roles.find(role => role.name === "Modérateurs");
if(message.member.roles.has(role.id)) {
    console.log(`Yay, the author of the message has the role!`);
  } else {
    console.log(`Nope, noppers, nadda.`);
  }
