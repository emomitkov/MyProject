var temp = [];
function makePerson(firstName, lastName, age, isFemale){

    for(var i = 0; i < arguments.length - 1; i+=1){
	temp.push(arguments[i]);        
    }
    if (arguments.length < 4 || temp.some(function(arg){ return !arg })){
        return 'Invalid parameters for a person!'
    }

    return {
        firstName: firstName + '',
        lastName: lastName + '',
        age: + age,
        gender: (isFemale === 1 || isFemale === 0) ? isFemale ? 'female' : 'male' : 'unknown'
    };
}
function peopleArrayGen(count){
    var i,
        people = [];
    for (var i = 0; i < count; i +=1){
    	var fname = prompt("Please enter " + (i+1) + " Person's first name" , "firstName"),
				lname = prompt("Please enter " + (i+1) + " Person's last name" , "lastName"),
				y   = prompt("Please enter " + (i+1) + " Person's age" , "0"),
				age = parseInt(y);
				z =   prompt("Please enter " + (i+1) + " Person's gender" , "1 is for female 0 is for male"),
				gender = parseInt(z);
        people.push(makePerson(fname,lname,age,gender));
    }
    return people;
}
console.log(peopleArrayGen(10));