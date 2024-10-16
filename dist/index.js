"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
let user = [3, "Rem"];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "",
};
employee.name = "Maurice";
console.log("employee", employee);
//# sourceMappingURL=index.js.map