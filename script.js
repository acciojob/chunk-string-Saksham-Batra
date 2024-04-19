function stringChop(str, size) {
  // your code here
	if(!str){
return [];
	}
	var chunks = [];
	for(var i = 0; i<str.length; i+=size.length){
var chunk = str.substring(i,i+chunk.length);
		chunks.push(chunk);
	}
	return chunks;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
