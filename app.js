const fs = require('fs');

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