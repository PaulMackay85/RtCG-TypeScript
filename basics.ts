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
