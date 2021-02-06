// TODO: Include packages needed for this application
const path = require("path")
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown") //imports generatemakedown 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"

    }, {
        type: "input",
        name: "description",
        message: "Can you provide a description of your project?"

    }, {
        type: "input",
        name: "install",
        message: "What installations were used?"

    }, {
        type: "input",
        name: "contributing",
        message: "Who contributed to your project?"


    }, {
        type: "input",
        name: "tests",
        message: "Were any tests ran?"

    }, {
        type: "input",
        name: "url",
        message: "What is your project's live link?"

    }, {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

    }, {
        type: "input",
        name: "questions",
        message: "What is your GitHub name and link?"

    }, {
        type: "input",
        name: "questions",
        message: "What is your email address?"

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // use fs to sync, path after to join to current working directory then add file name and data //
}

// TODO: Create a function to initialize app
function runApp() {
    inquirer.prompt(questions).then(function (responses) {
        writeToFile("README.md", generateMarkdown({ ...responses }))
        //inq use prompt (built in) questions - THEN pipe to responses, write a file and data is used to generate markdown git s\
    })
}

// Function call to initialize app
runApp();
