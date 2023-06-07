// In the exercises below, write your own code where indicated to achieve the desired result.
// One example is already completed. Your task is to complete any remaining prompt.
// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers)

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents)

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21)

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code. 
//Your task is to type out a comment, in English, explaining what that line of code is doing, 
// including what the comparison will evaluate to.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Line 41 of code is printing (true or false) whether or not there are more friends than siblings. 
// Because there are 6 friends and 2 siblings, our printed answer is "true"; we do have more friends than siblings. 

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Line 48 of code is printint whether or not there is NOT an exactly equal amount of attendees and meals.
// Because there are 9 attendees and 8 meals, they are NOT exactly equal, making the output true. 

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("Does the dog love to play AND love treats?", lovesToPlay && lovesTreats);

// YOU DO:
// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play OR love the dog park?", lovesToPlay || lovesDogPark)

// YOU DO:
// Determine if the dog loves to play and is a puppy
// HINT: Use the age variable and assume that a puppy is less than 2 years old

console.log("Does the dog love to play AND is the dog a puppy?", lovesToPlay && age < 2)