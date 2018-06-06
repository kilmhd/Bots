const Command = require ('./command')

module.exports = class Help extends Command{


	static match(message){
		return message.content.startsWith('!help')
	}
	static action (message){
		message.channel.send('\!help : Affiche la liste des commandes \n\!bender : Présentation du bot')
	}
}