const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
//filter the list for those born in the 1500's
const results = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600);
console.table(results);
//output first and last name in object
const firstAndLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(firstAndLast);
//Sort inventors by age
const age = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(age);
//This one confuses me a bit...
const total = inventors.reduce((total,inventor) => {
    return total + (inventor.passed - inventor.year);
},0);
console.table(total);
//Sort the inventors by years lived
//Starting to understand this
const yearsLived = inventors.sort((a,b) => {
    let lastGuy = a.passed - a.year;
    let nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1: 1;
});
console.table(yearsLived);

//11:32 timestamp for the video
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));

// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));

//Sort people by last name
//Just return aFirst and bFirst the same way if you want first names
//Destructuring to make a variable for first and last
let alphabetically = people.sort((a,b) => {
    const [aLast,aFirst] = a.split(', ');
    const [bLast,bFirst] = b.split(', ');
    //Ternary operator
    return aLast > bLast ? 1 : -1; 
});
console.log(alphabetically);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
let smallData = data.reduce((array, num) => {
    if(!array[num]){
        array[num] = 0;
    }
    array[num]++;
    return array;
}, []);
console.log(smallData);

// //Finds all Pokemon starting with a letter
// function getPokemonStartingWith(letter) {
//     const pokemonLinks = Array.from(document.querySelectorAll('.roundy tbody tr[style="background:#FFF"] td a[href*="/wiki/"][href*="(Pok%C3%A9mon)"]'));
//     const pokemonNames = pokemonLinks.map(link => {
//       const parent = link.parentNode;
//       const small = parent.querySelector('small');
//       const name = link.textContent.trim();
//       const smallText = small ? small.textContent.trim() : '';
//       return `${name} ${smallText}`;
//     });
//     return pokemonNames.filter(name => name.startsWith(letter.toUpperCase()));
//   }

// getPokemonStartingWith();


// function findPokemonByName(letter){
//     const pokemonLinks = Array.from(document.querySelectorAll('.roundy tbody tr[style="background:#FFF"] td a[href*="/wiki/"][href*="(Pok%C3%A9mon)"]'));
//     const pokemonNames = pokemonLinks.map(link =>{
//         const parent = link.parentNode;
//         const small = parent.querySelector('small');
//         const name = link.textContent.trim();
//         const smallText = small ? small.textContent.trim() : '';
//         return `${name} ${smallText}`;
//     });
//     return pokemonNames.filter(name => name.startsWith(letter.toUpperCase()));
// }

function pokemonByAlpha(letter){
    const selection = Array.from(document.querySelectorAll('.roundy tbody tr[style="background:#FFF"] td a[href*="/wiki/"][href*="(Pok%C3%A9mon)"]'));
    const pokemonNames = selection.map(name => {
        const parent = name.parentNode;
        const small = parent.querySelector('small');
        const pokemon = name.textContent.trim();
        const smallText = small ? small.textContent.trim() : '';
        return `${pokemon} ${smallText}`;
    });
    return pokemonNames.filter(names => names.startsWith(letter.toUpperCase()));
}