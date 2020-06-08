function isPrime(integer) {
    for (var x = 2; x < integer; x++) {
        if (integer % x === 0) {
            console.log(integer + " is divisble by " + x);
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(49));

function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
}

isThisWorking(3);
console.log("");
//console.log(isThisWorking(3));



// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");



/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


var laugh = function (num) {
    var laughs = "";
    for (var i = 0; i < num; i++) {
        laughs += "ha";
    }
    return laughs + "!";
}

console.log(laugh(3));


/*
 * Programming Quiz: Inline Functions (5-6)
 */

/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

emotions("happy", function (num) {
    var laughs = "";
    for (var i = 0; i < num; i++) {
        laughs += "ha";
    }
    return laughs + "!";
});