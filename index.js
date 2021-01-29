// TODO: Include packages needed for this application
const path = require("path")
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown") //imports generatemakedown 

// TODO: Create an array of questions for user input
const questions = [
{ type:"input",
name: "title",
message: "What is the title of your project?"



},{ type:"input",
name: "github",
message: "What is the github of your project?"



},{ type:"input",
name: "email",
message: "What is your email?"



}



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// use fs to sync, path after to join to current working directory then add file name and data //

}

// TODO: Create a function to initialize app
function runApp() {
inquirer.prompt(questions).then(function(responses){
    writeToFile("README.md", generateMarkdown({...responses}))
//inq use prompt (built in) questions - THEN pipe to responses, write a file and data is used to generate markdown git s\
})

}

// Function call to initialize app
runApp();
