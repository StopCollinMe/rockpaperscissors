const people = {
    collin:{
        name: "Collin",
        yearOfBirth: 1996,
    },
    sister:{
        name: "Sister",
        yearOfBirth: 1994,
    },
    grandma:{
        name: "Grandma",
        yearOfBirth: 1954,
    },  
    grandpa:{
        name: "Grandpa",
        yearOfBirth: 1954,
    },
    mom:{
        name: "Mom",
        yearOfBirth: 1972,
        yearOfDeath: "2004",
    }
};

// My solution sort of 
// const age = function(person1, person2){
//     const today = new Date();
//     const oldest = Object.values(people).sort((a,b) => {
//         return a > b ? 1 : -1;   
//     });
//     console.log(oldest);
// }
// age(people.collin, people.sister);

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
console.log(findTheOldest());

  module.exports = findTheOldest;