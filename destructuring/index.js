// Destructuring is syntatic sugar
// convience makes things easier, but we can always do it the other way
// Array destrcuturing works by **position** 

const names = ["Alice", "Bob", "Charlie", "Dylan", "Eddie"];
// const firstPerson = names[0];
// const secondPerson = names[1];
// const thirdPerson = names[2];
// // assigning by value not refernce
// names[0] = "Alex";
// console.log("hello " + firstPerson);
// //console.log("hello " + names[0]);
// const rest = names.slice(3);
// console.log(rest);

//desctruing makes this less tedious
const [ firstPerson, secondPerson, thirdPerson, ...rest] = names
const otherNames = ['Frank', 'Gina', 'Helen'];
// its still asigned by value
names[0] = 'alex';
console.log('heyo ' + firstPerson);
console.log(rest);
// we can use ... to spread into new array
const newNames = [...rest, ...otherNames, 'Iris'];
console.log(newNames);
// ...spread operator means we can put in as many as we want

console.log(Math.max(1, 2, 33, 4, 5));
const numbers = [11, 252, 2, 21, 73, 267];
//spread operator can be used to spread array into function that takes many args
console.log(Math.max(...numbers));

// this shortcut also means that functions can return more than one thing/ and array
const sumAndProduct = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return[sum, product]
}

const[firstAnswer, secondAnswer] = sumAndProduct(4, 5);
console.log(firstAnswer);
console.log(secondAnswer);

const morse = {A: '.-', B: '-..', C: '-.-.'};
console.log(Object.entries(morse));
const reversed = Object.entries(morse).reduce((result, [key, value]) => {
    //const[key, value] = entrySet;
    // const key = entrySet[0];
    // const value = entrySet[1];
    result[value] = key;
    return result;
}, {})
console.log(reversed);

// const greetPeople = (names) => {
//     console.log(`Heyo ${names[0]}, ${names[1]}, and friends`)
// }

const greetPeople = ([firstName, secondName]) => {
    console.log(`Heyo ${firstName}, ${secondName}, and friends`);
}

greetPeople(newNames);
greetPeople(names);

// object destructuring is the same but with names not positions
const me = {firstName: 'Daisy', lastname: 'Watt', age: 31};
const { lastname, age: currentAge, firstName = 'bob', location = 'australia' } = me;
console.log(firstName);
console.log(location); 
console.log(currentAge);

// const greetPerson = (person) => {
//     console.log(`hey ${person.firstName} hows the weather in 
//         ${person.location || 'aus'}?
//     `);
// };

const greetPerson = ({firstName, location = "aus"}) => {
    console.log(`hello ${firstName}, hows the weather in ${location}?`)
}

greetPerson(me)
greetPerson({firstName: 'martyna', location: 'poland'});


