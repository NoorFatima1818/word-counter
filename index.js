#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from 'figlet';
// Create a big heading using figlet
const heading = figlet.textSync('Word Counter', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
});
// Print the heading in a light color
console.log(chalk.hex('#ADD8E6')(heading)); // Light blue for the heading
// Asking user for input 
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: chalk.hex('#FFD700')("Enter your sentence to count the words.")
});
if (answers.sentence) {
    let words = answers.sentence.trim().split(" ");
    // showing words separated by comma 
    console.log(chalk.hex('#ADD8E6')('Words:'), chalk.hex('#90EE90')(words.join(', '))); // Light blue for label and light green for words
    // showing number of words in sectence
    console.log(chalk.hex('#FFB6C1')(`Your sentence word count is ${words.length}.`));
}
else {
    console.log((chalk.hex('#FFB6C1')("Oops! No sentence was entered!")));
}
