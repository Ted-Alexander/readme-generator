// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
MITinfo = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."
GNUinfo = "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version."
APACHEinfo = "Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License."
let licenseInfo = MITinfo

const generateReadme = (answers) =>
`# ${answers.title}
![readme-generator](https://img.shields.io/badge/Lisence-${answers.license}-green)
## Description
     ${answers.description}
     
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribution)
- [License](#license)
- [Questions](#questions)
     
## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## License
${licenseInfo}
    
## Questions
You can contact me with questions about the project at ${answers.email} .

My other projects can be found at github.com/${answers.github}.`;


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation intructions for the project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for the project.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines for the project.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter test intructions for the project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for the project.',
            choices: ['MIT', 'Apache_2.0', 'GPL']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateReadme(answers);
        ;

        // TODO: Create a function to write README file
        fs.appendFile('README.md', readmePageContent, (err) =>
            err ? HTMLFormControlsCollection.log(err) : console.log('Successfully created README.md!')
        );
    });
















// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
