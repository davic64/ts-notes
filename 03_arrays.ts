// Arrays
interface Computer {
  id: number;
  brand: string;
}

const macbook: Computer = {
  id: 1,
  brand: "Apple",
};

const xps: Computer = {
  id: 1,
  brand: "Dell",
};

export const computers: Computer[] = []; // With [] we indicate that it is an array of the specified data type

computers.push(macbook, xps);
