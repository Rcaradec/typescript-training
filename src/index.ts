let sales = 123_456_789;
let course = "Typescript";
let is_published = true;

let level;
level = 1;

//? Tuples
// The good practice is to limit tuples to two values
let user: [number, string] = [3, "Rem"];

//? Enum
// regular declaration
const small = 1;
const medium = 2;
const large = 3;

// is equivalent to
const enum Size {
  Small = 1,
  Medium,
  Large,
}
// Don't forget to use const before enum
// in order for TS Compiler to generate a more optimized code for index.js in /dist

// exemple of utilization
let mySize: Size = Size.Medium;
console.log(mySize);

//? Functions
// always type params and return value

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000);

// in tsconfig use these options :
// noUnusedLocales -> alert if some variables aren't used
// noUnusedParameters -> Raise an error when a function parameter isn't read
// noImplicitReturns -> alert if some cases return undefined

//? object
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// you can use readonly in for preventing modification of the value of the property
let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => console.log(date),
};
employee.name = "Maurice";

console.log("employee", employee);

//? Union Types
// we can specify what type the param can be
// but we have to handle each case (and benefit from the code completion depending of the type) -> Narrowing
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");

//? Intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// We can now use an Intersection type
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//? Literal
// literal means Exact, Specific
type Quantity = 50 | 100;=
let quantity: Quantity = 50;

// also applies for strings
type Metric = "cm" | "inch";
