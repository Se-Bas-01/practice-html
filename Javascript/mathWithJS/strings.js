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

// *** Section ends here *** \\

// *** This section is getting Parts, Lenghts, Codes, and Letters *** \\
console.log("")
console.error("Using length to find how many characters are in the string")

let text01 = "ABCDEFGHIJELMNOPQRSTUVWXYZ";
let length01 = text01.length;
console.log(length01);

console.error("Using CharAt()");

let text02 = "HaribolKrishna";
let char01 = text02.charAt(0);
console.log(char01);

console.log("")
console.error("Using CharCodeAt()");

let charCode01 = text02.charCodeAt(0);
console.log(charCode01);

console.log("")
console.error("Using CodePointAt()");

let codePoint01 = text02.codePointAt(0);
console.log(codePoint01);

console.log("")
console.error("Using At()")

let letter = text02.at(2);
console.log(letter);

console.log("")
console.error("Using Property Access");

let char02 = text02[0];
console.log(char02);

console.log("")
console.error("Using concat()");

let text03 = "Haribol";
let text04 = "Krishna";
let text05 = text03.concat(", ", text04);
console.log(text05);

console.log("")
console.error("Using slice()");

let text06 = ("Apple, Banana, Kiwi");
let part = text06.slice(7, 13);
console.log(part);

console.log("")
console.error("Using substring()");

let part2 = text06.substring(-5, 5);
console.log(part2);

console.log("")
console.error("using toUpperCase() and toLowerCase()");

let toCaps = text03.toUpperCase();
console.log(toCaps);

let toLower = text04.toLocaleLowerCase();
console.log(toLower);

console.log("")
console.error("Using isWellFormed");

let isWell = text03.isWellFormed();
console.log(isWell);

console.log("");
console.error("Using toWellFormed()");

let text = "Hello World \uD800";
let toWell = text.toWellFormed();
console.log(toWell);

console.log("");
console.error("Using trim() and trimStart()");

let forTrim = "          Haribol, Krishna          ";
let toTrim = forTrim.trim();
console.log(toTrim);

let toTrimStart = forTrim.trimStart();
console.log(toTrimStart);
