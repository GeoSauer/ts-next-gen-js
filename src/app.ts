// const userName = "Geo";
// userName = "Kallyn";
// let age = 34;

// age = 29;

// const add = (a: number, b: number) => a + b; //* super simple arrow function using the implicit return

// const add = (a: number, b: number = 1) => a + b; //* adding a default value to one of the arguments (has to be the last one or else it breaks)

const printOutput: (a: number | string) => void = (output) => console.log(output); //* doing a one-liner with one arg and no () means you have to define the return type on the function name, doesn't really save any space

// printOutput(add(5, 2));

// printOutput(add(5)); //* still prints even with one arg because of the default set on line 9

const button = document.getElementById("button");

if (button) {
  //* doing an if check if there's a chance button could be null instead of 'as ___' or <> typecasting
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
// const activeHobbies = ["Hiking", ...hobbies]; //* can also just one shot if the structure allows it

// activeHobbies.push(hobbies) //* TS gets mad because you're trying to push a whole array into an array vs its contents
// activeHobbies.push(hobbies[0], hobbies[1]); //* push takes an unlimited number of args but this is just silly
activeHobbies.push(...hobbies); //* spread operator pushes each item from hobbies into activeHobbies

const person = {
  firstName: "Geo",
  age: 34,
};

// const copiedPerson = person //* what this is doing is just copying the pointer to the person object in memory

// const copiedPerson = { ...person }; //* this actually creates a new object with same key value pairs as person

//* this ... is the rest operator which allows the function to accept any amount of args
const add = (...numbers: number[]) => {
  //* reduce performs an operation on each element in an array, returns a result, and then adds the results together
  //* it takes a function as its first arg and starting point as the second
  //* the function you pass in takes two args itself, the running total and the current value
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

//? manual array destructuring
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies; //* this destructuring assigns the items in hobbies to variables just like above but more elegantly.  It also doesn't change the array
console.log(hobbies, hobby1, hobby2, remainingHobbies); //* prints: ['Sports', 'Cooking'] 'Sports' 'Cooking' []

//* in object destructuring the key names must match the actual object keys...
// const { firstName, age } = person;
// console.log(person);

//* ...unless you deliberately alias them
const { firstName: userName, age } = person;
// console.log(userName, age, firstName, person); //* now TS can't find firstName, and the person object is unchanged
