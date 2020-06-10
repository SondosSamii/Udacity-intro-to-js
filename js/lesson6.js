/*
 * Programming Quiz: Building the Crew (6-2)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - The variable `crew` should be an array containing the Serenity\'s crew
 * - Your code should print `crew` to the console as an array. Do not iterate over the elements.
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = ["Mal", "Zoe", "Wash", "Inara", "Jayne", "Kaylee"];

console.log(crew);

for (let i = 0; i < crew.length; i++) {
    console.log(crew[i]);
}

crew.push("Sondos");
console.log(crew);

crew.pop();
console.log(crew);

crew.pop();
console.log(crew);

/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */


var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);


var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
console.log(donuts);

donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);


/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");
console.log(rainbow);


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(team) {
    if (team.length >= 7) {
        return true;
    }
    return false;
};

var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];
console.log(turnMeIntoAString);

console.log(turnMeIntoAString.join());
console.log(turnMeIntoAString.join(''));

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
console.log(donuts);

donuts.forEach(function (donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    console.log(donut);
});

/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

test.forEach(function (num, index) {
    if (num % 3 === 0) {
        test[index] += 100;
    }
});

console.log(test);

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function (donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    return donut;
});

console.log("Donuts Array");
console.log(donuts);
console.log("Improved Donuts Array");
console.log(improvedDonuts);

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

/*
* QUIZ REQUIREMENTS
* - Your code should have the variables `bills` and `totals`
* - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
* - Your `totals` array should be an array of numbers
* - Your code should print the `totals` array to the console
* - The output must be as described above. 
*/

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function (bill) {
    bill *= 1.15;
    bill = Number(bill.toFixed(2));
    return bill;
});

console.log(totals);