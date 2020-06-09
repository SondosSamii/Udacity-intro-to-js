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
