var person = {
    firstName: prompt("Enter your name:","Your name")
};
person.hello = function() {
    alert("Hello, " + this.firstName + "!");
};
 var x=person.hello();