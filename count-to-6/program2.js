let person = process.argv[2];
let lowCase = person.toLowerCase();
let name =  `Hello, ${person}!\nYour name lowercased is "${lowCase}".`;

console.log(name);