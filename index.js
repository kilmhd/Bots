const Discord = require('discord.js')
const bot = new Discord.Client()
const Help = require('./commands/help')

bot.on('ready', function (){
	bot.user.setGame('Bois du SLURM')
})

bot.on('guildeMemberadd', function(newmember){
	newmember.createDM().then(function(channel){
	return channel.send('Bienvenu' + newmember.displayName + ', assis toi et prend ce SLURM')
	}).catch(console.error)
})

bot.on('message', function (message){
	if(message.content.includes('Bonjour') || message.content.includes('Bonsoir')){
		message.channel.send('Hey do you want Beer ?')
	}
	if(message.content.includes('Bender')){
		message.reply('Oui c\'est moi ?!')
	}

//Gestionnaire des insultes, voir faire dico + modération
	if(message.content.includes('con'||'conne')){
		message.delete()
		message.reply('STOP \!\!\! pas d\'insulte ici \!')
	}

	Help.parse(message)


})



bot.login('NDUzNTA4MTkwMjQ0NTY5MDk5.DfgArw._QcaqNVD_CBWKgDbZt7d5do-goo')

