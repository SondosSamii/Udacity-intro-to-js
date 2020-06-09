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