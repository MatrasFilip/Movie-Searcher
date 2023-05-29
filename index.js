const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login('Klucz prywatny ;)');

client.on('ready', function(){
	console.log("Bot został poprawnie uruchomiony");
});

client.on('messageCreate', ( msg ) => {
    try 
	{
		if (msg.author.id != '951554620944154675')
		{	
			var movie = msg.content;
			var movieII = msg.content;
			var movieIII = msg.content;
			var words = movie.search(' ');
			while (words >= 0)
			{
				movie = movie.replace(' ', '+');
				movieII = movieII.replace(' ', '-');
				movieIII = movieIII.replace(' ', '%20');
				words = movie.search(' ');
			}
			movieNortex = movieII.toLowerCase();
			msg.reply
			(
				'<'+'https://filman.cc/wyszukiwarka?phrase='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://filser.cc/catalog?q='+movie+'&sort=ratingcount'+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://vizjer.pl/wyszukiwarka?phrase='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://bajeczki.org/?s='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://cda-hd.cc/?s='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://ekino-tv.pl/search/qf/?q='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://zerion.cc/szukaj?query='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://bflix.gg/search/'+movieII+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://ogladajanime.pl/search/name/'+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://justwatch.cc/search/'+movieII+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://lookmoviess.com/search/'+movieII+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://www.nortex.cc/title/'+movieNortex+'/index'+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				/*'<'+'https://www1.thepiratebay3.to/s/?q='+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+*/
				
				'<'+'https://moviestars.to/search/'+movie+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)+
				
				'<'+'https://freedisc.pl/search/movies/'+movieIII+'>'+
				String.fromCharCode(13)+String.fromCharCode(13)
			);
		

		}
	}
	catch(error)
	{
		console.error(error);
	}
});