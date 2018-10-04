console.log("placeholders('{ 'name': 'John', 'age': 13 }','My name is #{name} and I am #{age}-years-old'");
function placeholders(arg,str) {
	var text = str;
	var obj= JSON.parse(arg);
	var r = /\#\{(.*?)\}/g; 
	var text1 = text.replace(r, function(i, match) {
		console.log(i);
		console.log(match);
    return obj[match];
});

console.log(text1);
}

