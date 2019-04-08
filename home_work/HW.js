console.log("js connected");
//first version
// var song_list = $("song_list");
// var song_line = $("song_line");
// function song(songList, songLine)
// {
//   $songLine.text(song_line);
//   $songList.append(song_list);


// }

// function(event)
// {	
// 	var x=99;
// 	for(var i=x; i>=0; i--)
// {
// 	if(i>1)
// 	{
// 		song_line = i+" bottles of coke on the wall, "+i+" bottles of coke. Take one down and pass it around, ";
// 	}
// 	else if(i==1)
// 	{
// 		song_line = i+" bottle of coke on the wall, "+i+" bottle of coke. Take one down and pass it around, ";
// 	}
// 	else if(i<1)
// 	{
// 		song_line = "No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, "+x+" bottles of coke on the wall.";
// 	}

// }
// 	//song_line = ""
// 	event.preventDefault();
// 	song(song_list, songLine)

// }

//second version



function song(songList, songLine)
{
	console.log(songLine);
	//console.log(songList);
	var song_line1 =document.createElement('li');
	var lineNode = document.createTextNode(songLine);
	song_line1.appendChild(lineNode)
	songList.appendChild(song_line1);
	
	//var songNode = document.createTextNode(songLine);
	//songList.appendChild(songNode);
}

window.onload = function(){
	var x=99;
	var song_line1;
	for(var i=x; i>=0; i--)
	{
	if(i>1)
	{
		song_line1 = i+" bottles of coke on the wall, "+i+" bottles of coke. Take one down and pass it around, ";
	}
	else if(i==1)
	{
		song_line1 = i+" bottle of coke on the wall, "+i+" bottle of coke. Take one down and pass it around, ";
	}
	else if(i<1)
	{
		song_line1 = "No more bottles of coke on the wall, no more bottles of coke. Go to the store and buy some more, "+x+" bottles of coke on the wall.";
	}
	var song_list1 = document.getElementById("song_list");
	//var song_line1 = document.getElementById('song_line');

	song(song_list1, song_line1);
}
}
	


