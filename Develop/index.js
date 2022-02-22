// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Application Variables 


// TODO: Create an array of questions for user input
const questions = [
    
    // Project Title 
    {
        type: 'input',
        name: 'title',
        message: 'Title: What is the title of the project?',
        // Validate = to check if the user provided a value 
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Description 
    {
        type: 'input',
        name: 'description',
        message: 'Description: Draft a description of the project.',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Installation Instructions 
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: Describe the steps required to install the project.',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Usage Information  
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: What is the projects expected use?',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Contribution Guidelines  
    {
        type: 'input',
        name: 'contributions',
        message: 'Contributions: How can other developers contribute to the project?',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Testing Instructions  
    {
        type: 'input',
        name: 'testing',
        message: 'Testing: How do you test the project?',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project License Options   
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'License: Choose a license fro your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    },

    // Project Email Address 
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: (value) => {if(value) {return true} else {return 'Answering is required to continue'}},
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
            throw err;
        console.log('Success! Your README file is ready!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
