// console.log("Hello World!");

// Adding Elements To An Array
// This is done by using the push method. This method adds the element(s) to the end of the array
// const numbers = [3,4];

// numbers.push (5,6)  // Adding multiple elements
// numbers.push (7)


// Use unshift method to add elements to the beginning of the array
// numbers.unshift (1, 2)

// console.log(numbers);

// TO add, replace or remove elements at the  middle or any position of an array we use the splice method

const months = ['Jan', 'March', 'April', 'June']
console.log(months);
months.splice (1, 0, 'Feb');  //1 = start position, 0 = delete count (zero means delete nothing), Feb = the element added
//inserts at index 1
console.log(months); 
// Expected output: Array ['Jan', 'March', 'April', 'June']

months.splice(4, 1, 'May', 'Aug');
// replaces 1 element at index 4
console.log(months);

months.splice(4, 2, 'July' );
//deletes elemets at index 4 and 5 and adds July at index 4
console.log(months);

// Finding Elements in An Array
// The indexOf() method is used. And this also depends on wether you are dealing with primitives or reference types.
const numbero = [1, 2, 3, 4];
console.log(numbero.indexOf('b')); 

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('tony'));

const numbers = [1, 2, 3, 4];

console.log(numbers.indexOf('a'));


// lastindexOf method - used to return the last index of a given element or -1 if it doesn't exist
const counters = [1, 2, 3, 3, 4, 3, 5, 6];
console.log(counters.lastIndexOf(3));  //this should return 5

// NB : To check if a given element eg number, exists in an array, do the below:

const cart = [1, 2, 3, 1, 4];
console.log(cart.indexOf(1) !== -1);