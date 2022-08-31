import countries from './countries_data.js';
// Your output should look like this

// console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25}
]

// Use the countries information, in the data folder. Sort countries by name, 
// let countriesName = countries.sort((a, b) => a.name > (b.name ? 1 : -1))
// let countriesName = countries.sort((a, b) => a.name - b.name);
//   console.log(countriesName);
//   by capital
let countriesCapital = countries.sort((a, b) => a.capital > b.capital ? 1 : -1)
// let countriesCapital = countries.sort((a, b) => a.capital - b.capital);
  console.log(countriesCapital);

// by population
let countriesPopulation = countries.sort((a, b) => a.population > b.population ? 1 : -1)

// let countriesCapital = countries.sort((a, b) => a.capital - b.capital);
  console.log(countriesPopulation);
// *** Find the 10 most spoken languages:



//Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(arr, count){
    let polCountires = arr
    .sort((a, b) => a.population > b.population ? 1 : -1)
    .reverse()
    return polCountires.slice(0, count)
}

console.log(mostPopulatedCountries(countries, 10))




const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]