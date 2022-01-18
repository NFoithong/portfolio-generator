const fs = require('fs');
<<<<<<< HEAD
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('portfolio complete! Checkout index.html to see the output!')
// })
// console.log(inquirer);

// inquirer
//     .prompt([{
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//     }])
//     .then(answers => console.log(answers));


const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter you name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};
// promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {

    console.log(`
=================
Add a New Project
=================
    `);

    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'laguages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])

    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => console.log(projectAnswers))
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
=======

const generatePage = require('./src/page-template.js');

// console.log(profileDataArgs);

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//     name: 'Lernantino',
//     age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// console.log(animalArray);
// console.log(personObj);

// Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
// };

// // Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
// };

// We can also employ even more concise syntax not available in 
// regular function expressions. If we only need to perform one action, 
// like return the value of two arguments added together, 
// we can omit the curly braces surrounding the function body, like this:
// const addNums = (numOne, numTwo) => numOne + numTwo;
// const sum = addNums(5, 3); // sum would be 8



// const printProfileData = profileDataArr => {
//     console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);


// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// };
// printProfileData(profileDataArgs);

// const message = 'Hello Node!';

// if (true === true) {
//     const message = 'Hello ES6!';
//     let sum = 5;
//     sum += 10;
//     console.log(message);
//     console.log(sum);
// }

// console.log(message);
// console.log(sum);

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

// Is the same as this...
// profileDataArr.forEach((profileItem) => {
//     console.log(profileItem);
// });

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);


// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

// With template literals, we can wrap the string in backticks and interpolate the variables with the ${<variable>} syntax.
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));

// Multi-line Strings
// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
// };
// console.log(generatePage('Jane', 'janehub'));
// console.log(name, github);
// console.log(generatePage(name, github));
>>>>>>> 67477c3259614dc298936f41feabacde9af478f5
