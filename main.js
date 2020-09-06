var Discord = require("discord.js");
var client = new Discord.Client();
var date = new Date();
var jour = date.getDay();
var heure = date.getHours();
var minutes = date.getMinutes();
var prefix = "G";


client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === prefix + 'help') {
	  var help_embed = new Discord.MessageEmbed()
	  	.setColor("13ff00")
		.setTitle("LISTE DES COMMANDES")
		.addField("EDT (en maintenance)" , "```GEDT```")
		.addField("EDT complet" , "```GEDTfull```")
		.addField("Calendrier du BAC (en maintenance)", "```GBAC```")
		.addField("Site important", "```GSITE```");
		msg.channel.send(help_embed);
	}
	if (msg.content === prefix + 'EDT') {
		var EDT = new Discord.MessageEmbed()
		  .setColor("13ff00")
		  .setTitle("LISTE DES EDT")
		  .addFields(
			{ name: 'EDT de louis et Rémi(En cours)', value: '```GLouis```', inline: true },
			{ name: 'EDT de KORONA(Rien)', value: '```GKorona```', inline: true },
			{ name: 'EDT de Ines(Rien)', value: '```GInes```', inline: true },
			{ name: 'EDT de MAude(Rien)', value: '```GMaude```', inline: true },
			{ name: 'EDT de Hugo(Rien)', value: '```GHugo```', inline: true },
			{ name: 'EDT de Jordan(Rien)', value: '```GJordan```', inline: true },
			{ name: 'EDT de Killian(Rien)', value: '```GKillian```', inline: true },
		)
		  msg.channel.send(EDT)
	  }
	if (msg.content === prefix + 'EDTfull') {
		var EDTfull = new Discord.MessageEmbed()
		  .setColor("13ff00")
		  .setTitle("LISTE DES EDT")
		  .addFields(
			{ name: 'EDT de louis et Rémi(En entier)', value: '```GLouisf```', inline: true },
			{ name: 'EDT de KORONA(En entier)', value: '```GKoronaf```', inline: true },
			{ name: 'EDT de Ines(En entier)', value: '```GInesf```', inline: true },
			{ name: 'EDT de MAude(En entier)', value: '```GMaudef```', inline: true },
			{ name: 'EDT de Hugo(En entier)', value: '```GHugof```', inline: true },
			{ name: 'EDT de Jordan(En entier)', value: '```GJordanf```', inline: true },
			{ name: 'EDT de Killian(En entier)', value: '```GKillianf```', inline: true },
		)
		  msg.channel.send(EDTfull)
	  }
	if (msg.content === prefix + 'BAC') {
		  msg.channel.send("https://pin.it/4AEwkGY");
	    }
	if (msg.content === prefix + 'SITE') {
		msg.channel.send("Toute les infos sur le bac : http://quandjepasselebac.education.fr/");
		}
	if (msg.content === prefix + 'Louisf') {
		msg.channel.send("https://cdn.discordapp.com/attachments/598255208308539409/751042821418385448/20200903_092912.jpg");
		  }
	if (msg.content === prefix + 'Koronaf') {
		msg.channel.send("https://cdn.discordapp.com/attachments/750293019177254932/750293050281951282/Screenshot_20200901-113825.jpg");
	}
	if (msg.content === prefix + 'Inesf') {
		msg.channel.send("https://cdn.discordapp.com/attachments/598255208308539409/751048780530319391/20200902_120403.jpg");
		  }
	if (msg.content === prefix + 'Maudef') {
		msg.channel.send("https://cdn.discordapp.com/attachments/750293019177254932/750294320644489316/image0.png");
		  }
	if (msg.content === prefix + 'Hugof') {
		msg.channel.send("https://cdn.discordapp.com/attachments/598255208308539409/751518191804743720/Snapchat-934250952.jpg");
		  }
	if (msg.content === prefix + 'Jordanf') {
		msg.channel.send("https://cdn.discordapp.com/attachments/598255208308539409/751524922928660560/image0.jpg");
		  }
	if (msg.content === prefix + 'Killianf') {
		msg.channel.send("https://cdn.discordapp.com/attachments/750293019177254932/750295195853127750/unknown.png");
			  }
	
	
    if (msg.content === prefix + 'Louis') {

	if (jour === 1)	
		if(heure < 10)
			msg.channel.send("\nEn cours de :```Pause```Prochain cours :```SPORT(10h-12)```");
		
	if (jour === 2)	
		if(heure < 8)
			msg.channel.send("\nEn cours de :```Pause```Prochain cours :```SPORT(10h-12)```");
		
	if (jour === 3)	
		if(heure < 8)
			msg.channel.send("\nEn cours de :```Pause```Prochain cours :```SPORT(10h-12)```");

	if (jour === 4)
		if(heure < 8)
			msg.channel.send("\nEn cours de :```Pause```Prochain cours :```SPORT(10h-12)```");
		
	if (jour === 5)	
		if(heure < 10)
			msg.channel.send("\nEn cours de :```Pause```Prochain cours :```SPORT(10h-12)```");

	if (jour === 6)	
		msg.channel.send("\nEn cours de :```Pause```Prochain cours :```MATHEMATIQUE(10h-11h)(D27)```");
				
	if (jour === 0)	
		msg.channel.send("\nEn cours de :```Pause```Prochain cours :```MATHEMATIQUE(10h-11h)(D27)```");
				}
    if (msg.content === prefix + 'Korona') {
			msg.channel.send("Merci de taper GEDT pour savoir l'avancement du bot");
				}
    if (msg.content === prefix + 'Ines') {
			msg.channel.send("Merci de taper GEDT pour savoir l'avancement du bot");
				}
	if (msg.content === prefix + 'Maude') {
			msg.channel.send("Merci de taper GEDT pour savoir l'avancement du bot");
				}	
	if (msg.content === prefix + 'Hugo') {
		msg.channel.send("Merci de taper GEDT pour savoir l'avancement du bot");
		  }
	if (msg.content === prefix + 'Jordan') {
		msg.channel.send("Merci de taper GEDT pour savoir l'avancement du bot");
		  }
	if (msg.content === prefix + 'Killian') {
		msg.channel.send("Merci de taper GEDT pour savoir l'avancement du bot");
			  }
  });



client.login(process.env.TOKEN);
