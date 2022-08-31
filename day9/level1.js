const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
let callBack = function (country){console.log(country);}
let callName = function (name){console.log(name);}
let callNumber = function (number){console.log(number);}
countries.forEach(callBack);
names.forEach(callName)
numbers.forEach(callNumber)

// Use map to create a new array by changing each country to uppercase in the countries array.
countries.map(country =>{
    console.log(country.toUpperCase());
})
// Use map to create an array of countries length from countries array.
countries.map(country =>{
    console.log(country.length);
})
// Use map to create a new array by changing each number to square in the numbers array
numbers.map(number =>{
    console.log(number ** 2);
})
// Use map to create a new array by changing each product to uppercase in the products array.
products.map( product =>{
    console.log(product.product.toUpperCase());
})
// Use map to change to each name to uppercase in the names array
names.map(name =>{
    console.log(name.toUpperCase());
})
// Use map to map the products array to its corresponding prices.
products.map( product =>{
    console.log(product.price);
})
// Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

// Use filter to filter out countries having six character.
const countriesWithSix = countries.filter((country) =>
  country.length === 6
)
console.log(countriesWithSix)
// Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixMore = countries.filter((country) =>
  country.length >= 6
)
console.log(countriesWithSixMore)
// Use filter to filter out country start with 'E';
const countriesStartWithE = countries.filter((country) =>
  country.startsWith('E')
)
console.log(countriesStartWithE)
// Use filter to filter out only prices with values.
const productWithValues = products.filter((product) =>
   typeof product.price === 'number'

)
console.log(productWithValues)
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let getStringLists = (arr) =>{
   return arr.filter((item) => typeof item === 'string');
}
arrays = [3,5,4,'hdhdhd']
console.log(getStringLists(array));
// Use reduce to sum all the numbers in the numbers array.
let answer = numbers.reduce((acc,cv)=>acc +cv, 0); 
console.log(answer);
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let result =countries.reduce((acc,cv,index, arr)=> (index !== (arr.length -1)) ? `${acc} ${cv},`: `${acc} and ${cv} are north european countries.`, 'Estonia,')

console.log(result);
// Explain the difference between some and every
// Use some to check if some names' length greater than seven in names array

const someName = names.some((name) =>  name.length > 7)

console.log(someName)
// Use every to check if all the countries contain the word land
// arra = [true, true, true, true, true, true];
// const areSome = arra.every((arr) =>  arr === true)
// console.log(areSome);
const everyName = names.every((name) =>  name.includes('land'))

console.log(everyName);
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array

const firstCountry = countries.find((country) =>  country.length = 6)
console.log(firstCountry);
// Use findIndex to find the position of the first country containing only six letters in the countries array
const firstCountryInd = countries.findIndex((country) =>  country.length = 6)
console.log(firstCountryInd);
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayInd = countries.findIndex((country) =>  country === 'Norway')

console.log(norwayInd);
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaInd = countries.findIndex((country) =>  country === 'Russia')
console.log(russiaInd);






















