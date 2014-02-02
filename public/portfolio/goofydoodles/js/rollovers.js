function preload(){
	if(document.images){
		var image_array = new Array();
		
		// path to the directory with images
		var path = 'http://ethanmuller.com/goofydoodles/img/';

		// enumeration of the "active" images
		image_array[0] = path + "goofy-doodles-jiggly.gif";
		image_array[1] = path + "previous-jiggly.gif";
		image_array[2] = path + "random-jiggly.gif";
		image_array[3] = path + "next-jiggly.gif";

		var preload_image = new Array ();
	 
		for(var i=0; i<image_array.length; i++)
		{
			preload_image[i]= new Image();
			preload_image[i].src = image_array[i];
		}
	}
}

function mouseInteractions(){

	// logo
	document.images("goofy-doodles").onmouseover = function(){ rollover(this.name, this.name + '-jiggly.gif') };
	document.images("goofy-doodles").onmouseout = function(){ rollover(this.name, this.name + '.gif') };

	// previous
	document.images("previous").onmouseover = function(){ rollover(this.name, this.name + '-jiggly.gif') };
	document.images("previous").onmouseout = function(){ rollover(this.name, this.name + '.gif') };

	// random
	document.images("random").onmouseover = function(){ rollover(this.name, this.name + '-jiggly.gif') };
	document.images("random").onmouseout = function(){ rollover(this.name, this.name + '.gif') };

	// next
	document.images("next").onmouseover = function(){ rollover(this.name, this.name + '-jiggly.gif') };
	document.images("next").onmouseout = function(){ rollover(this.name, this.name + '.gif') };

}

function rollover(name, filename)
{
  var fullpath = 'http://ethanmuller.com/goofydoodles/img/' + filename;
  document.images[name].src = fullpath;
}

window.onload = function(){
	preload();
	mouseInteractions();
}
