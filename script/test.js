$( document ).ready(function() {
  $('p').on(
  	'click', 
  	function(event){  		
  		$(this).toggleClass('orange')
  });



  	$.getJSON( "https://api.github.com/repos/JohanEks/testrepo/commits", function( data ) {
		  var items = [];
		  $.each( data, function( key, val ) {
		  	items.push( "<li id='" + val.sha + "'>"+val.commit.author.name+": \"" + val.commit.message + "\"</li>" );
		  });
		 
			$('ul#commits').html(items.join(""))
		  
	});
});