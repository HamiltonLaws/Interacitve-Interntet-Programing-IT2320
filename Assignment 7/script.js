
function creatMovieObject()
{
	return{
		
		
		"Title" : "Harry Potter and Order of the Phoenix",
		"Director" : "David Yates",
		"Cast"   : [
		
				{
					"firstName" : "Emma",
					"lastName"  : "Watson",
					"part"  : "Hermione"
				},
		
				{
					"firstName" : "Daniel",
					"lastName"  : "Radcliffe",
					"part"  : "Harry"
				},
		
				{
					"firstName" : "Rupert",
					"lastName"  : "Grint",
					"part"  : "Ron"
				}
		
		
				]
		};
}
function displayMovie(movie)
{
	alert(movie.Title);
	alert("Director " + movie.Director);
	
	for(var x = 0; x<movie.Cast.length; x++)
	{
		var actor = movie.Cast[x];
		alert(actor.firstName + " " + actor.lastName + " plays " + actor.part);
	}
}
window.onload = function Load()
{
	
	var movie = creatMovieObject();
	displayMovie(movie);
}