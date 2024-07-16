// Data Types

export const name = "Dave"; // name: "Dave" TS defaults to the data type
export let age: number = 28; // In this case, the type of data we want is specified
export const isValid: boolean = true;

/* TS has something called type safety, what this does is that TS makes sure that
the data type is the type of data it is expecting. */
// age = "hola"; // ❌ Is wrong since age is of type number
age = 20; // ✅

// Template strings have super power
export const templateString = `This is a string
multiline
which can have
' double
single
inject values ${name}`;
