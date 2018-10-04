var a=parseInt('1234');
var b=parseInt('1238abc');
var c=parseFloat('0.15');
var d=parseFloat('3.14ivan');
var e=Number('Infinity');
var f=Number('99999999999999999999');

console.log(a);
// expected output: 1234
console.log(typeof a);
// expected output: number
console.log(b);
// expected output: 1238
console.log(typeof b);
// expected output: number
console.log(c);
// expected output: 0.15
console.log(typeof c);
// expected output: number
console.log(d);
// expected output: 3.14
console.log(typeof d);
// expected output: number
console.log(e);
// expected output: Infinity
console.log(typeof e);
// expected output: number
console.log(f);
// expected output: 100000000000000000000
console.log(typeof f);
// expected output: number
