//this is the creation of the first js code for my website
//james marsh 
// sunday jan15  10:09pm  2023
//thanks to mosh hamedani

//javascript is dynamic so variables can change at runtime

//this is a variable test

//cannot name variables any keyword such as  if else var  let .....
//dont start naming variables with numbers

let firstName = 'james';
let lastName = 'marsh';
console.log(firstName + ' ' + lastName);

//constants
//let interestRate = 0.3;//this is just a variable

const interestRate = 0.3; //USE THIS IF YOU ODNT NEED TO REASSIGN




console.log("data");
//primitive types
//string number boolean undefined null
//the names above are string literal 
let isApproved = true; //boolean literal

//undefined is a keyword
//null is a keyword to clear a variable


//in es6 there is a primitive known as symbol


//in console you can use the command typeof to find the type of a variable
//cannot name a variable typeof


//reference types

//object array function



//THIS IS AN OBJECT
let person = {
  name: 'jaam',
    age: 100
};

//dot notation
person.name = 'hello!';

//bracket notation

person['name'] =  'Mary';
//use this if the user is accessing a property at runtime....
let blue = 'name';
person[blue] = 'mary';




//THIS IS AN ARRAY
let selectedColors = ['red','blue']; //array literal
console.log(selectedColors[0]);
//array length is dynamic....
//array can store multiple types of objects
console.log(typeof selectedColors);

console.log(selectedColors.length);
//array elements can be accsed with dot notation


//THIS IS A METHOD
function greet() {
    console.log('Hello World');
}

greet();
greet();

//a parameter is what's used at declaratino
//an argument is the actual value supplied

function sayHi(name,lastName){
console.log(name + ' says hi');
}
sayHi('john','smith');
//can overload methods???/functions
//probably..obviously 


//how can you use template literals to clean up the code


//calculate square of a number
function square(number) {
    return number*number;
}

console.log(square(2));

//how can i code a button.









//BARRING ALL THE ABOVE CODE I AM GOING TO USE THE NEXT METHODS TO PUSH AN ARRAY OF IMAGES ONTO MY WEBSITE




//to push images:
/*
// Create HTMLImageElement
let myImage = new Image(width, height);

// Assign it an src attribute
myImage.src = 'https://site.com/example-1.jpeg';


NEXT---------


// Declare an array object for our array of images
let arrayOfImages = [];

// Create image object and assign width and height
let myImage = new Image('1024','768');
// Assign src attribute to image object
myImage.src = 'https://site.com/example-1.jpeg';

// Push image object to arrayOfImages
arrayOfImages.push(myImage);

// Output arrayOfImages to the console
console.log(arrayOfImages);


//Every time you use the Image() constructor, 
//you create a new instance of an HTMLImageElement. 
//You can these reference and manipulate that HTMLImageElement as you wish.


NEXT------------


// Append an <img> element to the <body> tag
document.body.appendChild(arrayOfImages[0]);

// Insert an <img> element as the inner HTML of div#image-01
document.querySelector('div#image-01').innerHTML(arrayOfImages[0]);



*/