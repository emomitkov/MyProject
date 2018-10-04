function permutationofSets(argument) {
	  var arr = [];
	  for (var i = 0; i < argument ; i++) {
      arr[i] =i + 1;

}
function swap (myArray, index1, index2) {
  var temp = myArray[index1];
  myArray[index1] = myArray[index2];
  myArray[index2] = temp;
  return myArray;
}

function permute (myArray, startIndex, endIndex) {
  if (startIndex === endIndex) {
	console.log(myArray.join(', '));
  } else {
    var i;
    for (i = startIndex; i <= endIndex; i++) {
      swap(myArray, startIndex, i);
      permute(myArray, startIndex + 1, endIndex);
      swap(myArray, i, startIndex); // backtrack
    }
  }
}

var myArray = arr;
permute(myArray, 0, myArray.length-1); 
}