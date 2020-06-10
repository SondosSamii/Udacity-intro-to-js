/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function () {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function () {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
        else {
            return "The umbrella is already closed!";
        }
    }
};

console.log(umbrella.open());
console.log(umbrella.close());


/*
 * Programming Quiz: Menu Items (7-2)
 * Create an object named `breakfast`. 
 * The object should contain properties for the `name`, `price`, and `ingredients`.
 * Print the entire object on the console
 */

// your code goes here
var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function () {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "\%.";
    }
};

console.log(savingsAccount.printAccountSummary());
