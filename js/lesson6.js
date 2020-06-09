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
