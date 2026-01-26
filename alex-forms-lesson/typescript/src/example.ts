// TS does type inference
let myName = "Daisy";
// myName = 30; // TS assumes that i meant this to be a string and wont let me assign any other type;

//type declaration varName: type
let myAge: number;
myAge = 31;

const myHeight: number = 172;
//myHeight = 200;

// type inference works on arrays
const names = ["Alice", "Bob", "Charlie", 44];
const [first, ...rest] = names;

//type inference protects you against mising data types
names.push(44);
//names.push(true);

// two ways fo declaring an array type
const numbers: number[] = [1,2,3];
//numbers.push("alice")
const bools: Array<boolean> = [true, false]

// functions
// typing the parameter to a function - letting return type be inferred
const add = (a: number, b: number) => a + b;
const result = add(1, 2);
console.log(result);
function subtract(a: number, b: number) {
    return a - b;
}

// or we can explicity type the return value of a function
const multiply = (a: number, b: number):number => a * b;
function divide(a: number, b: number): number{
    if (b === 0){
        throw new Error ("cant divide by zero");
    }
    return a / b;
}

async function slowAdd(a: number, b: number): Promise<Array<number>>{
     return [a + b];
}
// cant use the wrong type or arg
// add(10, "10");
// cant use the wrong number of arguments
//subtract(10);\

//optional args 
function myFunction(optional?: boolean) {
    // do some stuff
}

myFunction();
myFunction(true);

// string union types
type SortDirection = "ASC" | "DESC";
function mySort(direction = "ASC") {
    if (direction === "ASC"){
        console.log("sort in ascending order");
    } else {
        console.log("sort in descending order");
    }
}

mySort("ASC")

