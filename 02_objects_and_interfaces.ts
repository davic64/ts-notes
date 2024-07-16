// Objects and Interfaces

export const computer = {
  id: 1, // Number
  brand: "Apple", // String
};

// With TS you can stipulate an object to make it more accurate
export interface Computer {
  id: number;
  brand: string;
  processor?: string; // Adding the "?" means that it is an optional field
}

export const macbook: Computer = {
  id: 1,
  brand: "Apple",
};

export const xps: Computer = {
  id: 1,
  brand: "Dell",
  processor: "Core i9",
};

// export const macbook: Computer = {
//     id: "1", // ❌ because it's a number type and is receiving a string
//     brand: "Apple",
//   };
