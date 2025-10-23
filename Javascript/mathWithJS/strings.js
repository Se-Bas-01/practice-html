// *** This section is basic string decleration and logging. *** \\
//creating and logging const variable named string01.
console.error("Const named string01");

const string01 = "The revolution will not be televised.";
console.log(string01)// "The revolution will not be televised."

//creating and logging const variable named badString01.
console.log("")
console.error("Const named badString01 with value of string01");

const badString01 = string01;
console.log(badString01);// "The revolution will not be televised."

//creating and logging const variables named single01, double01 backtick01.
console.log("")
console.error("Types of Quotes/Ticks");

const single01 = 'Single Quotes';
const double01 = "Double Quotes";
const backtick01 = `Backticks`;
console.log(single01);// "Single Quotes"
console.log(double01);// "Double Quotes"
console.log(backtick01);// "Backticks"
// *** Section ends here *** \\

// *** This section is more complex string decleration and logging with temperate literates *** \\

console.log("")
console.error("Greeting");

const name = "Subala";
const greeting = `Haribol ${name}`;
console.log(greeting); // "Haribol Subala"

const one = "Haribol, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);// "Haribol, how are you?"