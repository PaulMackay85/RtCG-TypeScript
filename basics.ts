// Primatives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Ash';

let isInstructor: boolean;
isInstructor = false;

// More complex types

let hobbies: string[];
hobbies = ['Reading', 'Watching Movies'];

// let person: {
//   name: string;
//   age: number;
// };
// person = {
//   name: 'Paul',
//   age: 36,
// };

// let people: {
//   name: string;
//   age: number;
// }[];

// Type inferance

// let course = "React - The Complete Guide";
// course = 12345; - Cannot now be set to a number from a string.

// Union Types

let course: string | number = 'React - The Complete Guide';
course = 12345;

// Type Aliases

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Paul',
  age: 36,
};

let people: Person[];

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  //<T> changes "any" to being the same type
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); // Would error as you can only call split on strings.
