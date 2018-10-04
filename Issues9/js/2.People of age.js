var peopleProblem2 = [],
    resultProblem2,
    showAge;
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
};

for (var i = 0; i <3; i++)
{

    var fname = prompt("Please enter " + (i+1) + " Person's first name" , "firstName"),
		lname = prompt("Please enter " + (i+1) + " Person's last name" , "lastName"),
		y   = prompt("Please enter " + (i+1) + " Person's age" , "0"),
		age = parseInt(y);
		z =   prompt("Please enter " + (i+1) + " Person's gender" , "1 is for female 0 is for male"),
		gender = parseInt(z);
        peopleProblem2.push(makePerson(fname,lname,age,gender));
}
    resultProblem2 = peopleProblem2.every(function(person)
{
    return person.age >= 18;
});
    peopleProblem2.forEach(function(person){
    console.log(person.firstName + " " + person.lastName + ' - ' + 'age: ' + person.age);
});
console.log('The array of persons contains only people of age (with age 18 or greater): ' + resultProblem2);