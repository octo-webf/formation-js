const inputs = process.argv.slice(2);
const result = inputs
  .map(element => element[0])
  .reduce((accumulator, character) => accumulator + character);

console.log(`[${inputs}] becomes "${result}"`);
