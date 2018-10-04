function find(element){ 
    //getting the name of the element
    var elements = Object.getOwnPropertyNames(element);
    
    //sorting out the elements
    elements.sort(); 
    
    //printing the name of the element as a string
    console.log("Elements: " + element.toString());
    
    //getting the first element with index 0
    console.log("Lexicographically first: " + elements[0]); 
    
    //getting the last element with index lenght-1
    console.log("Lexicographycally last: " + elements[elements.length-1]); 
    }
    
    //printing out the documents
    find(document); 
    
    //printing out the window
    find(window); 
    
    //printing out the navigator
    find(navigator);