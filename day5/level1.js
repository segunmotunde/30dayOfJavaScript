let def = [];
let eleArray = ['Welcome', 24, true, 'Happy', [],undefined, 'come']
console.log(eleArray.length);

let mid = Math.ceil((eleArray.length-1) / 2);
let first = eleArray[0];
let middle = eleArray[mid];
let last = eleArray[eleArray.length - 1];
console.log(first, middle, last);

let mixedDataTypes = ['birthday', 24, true, 'Happy', null, undefined, 'come'];
console.log(mixedDataTypes.length-1);
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies);
console.log(itCompanies.length);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]} ,${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);

let check = 'Facebook';
if(itCompanies.indexOf(check) === -1) {
    console.log('a company is not found');

} else{
    console.log(check);
}

for (let i= 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes('oo')) {
    console.log(itCompanies[i]);
  }
}






console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-3));
console.log('Hello world!');

















