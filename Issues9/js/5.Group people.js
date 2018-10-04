function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};
var x = prompt("Please enter number people", "0"),
	 	num = parseInt(x),
	 	obj=[];
	 	for (var i = 0; i < num; i++) {
	 		var fname = prompt("Please enter " + (i+1) + " Person's first name" , "firstName"),
				lname = prompt("Please enter " + (i+1) + " Person's last name" , "lastName"),
				y   = prompt("Please enter " + (i+1) + " Person's age" , "0"),
				age = parseInt(y);
			obj[i] = new Person(fname,lname,age);
	 	}
	 	console.log(obj);

function group(arr){
    sorted = {};
    for(let i = 0; i < arr.length; i++) {
        var obj = arr[i],
            ages = [];
  
        for(let j = 0; j < arr.length; j++) {
            if(obj.age === arr[j].age){
                ages.push(arr[j]);    
                sorted[obj.age] = ages;
            }
        }          
    }
    console.log(sorted);
};
var groupedByAge = group(obj);