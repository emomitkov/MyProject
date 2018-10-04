var fantasyLit = {
    tolkien: "The Lord of the Rings",
    lewis: "The Chronicles of Narnia"
};
console.log(fantasyLit);
var prop=prompt("Property:","property");
fantasyLit.gotProperty = function () {
	if(prop in this){
	console.log("The fantasyLit has property " + prop);
	}
	else{
	console.log("The fantasyLit hasn't property " + prop);
	}
};
var obj=fantasyLit.gotProperty();