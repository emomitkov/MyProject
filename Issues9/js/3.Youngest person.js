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
obj.youngerPerson = function () {
			var min = this[0].age,
				currentfname = this[0].firstName,
				currentlname = this[0].lastName;
 
			 for(var i=1; i<this.length; i++){
			   if(this[i].age < min){
			     min = this[i].age;
			     currentfname = this[i].firstName;
			     currentlname = this[i].lastName;   
			   }
			  }
			  console.log("The youngest is " + currentfname + " " + currentlname + ".");
}
var name = obj.youngerPerson();