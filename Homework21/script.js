const firstName = `Alexandr `;
const lastName = `Veselov `;
const isStudent = `true`;

console.log(firstName);
console.log(lastName);
console.log(isStudent);

const age = `38`;
const currentYear = `2026`;
const birthYear = currentYear - age;
const message = `Меня зовут `  + firstName + lastName + `,` + `мне ` + age + ` лет` + `.` + `Я ученик курса: ` + isStudent

console.log(age);
console.log(currentYear);
console.log(birthYear);
console.log(message);

let a = `123`;
let b = +`456`;
let c = Number(`789`);
let d = Boolean(0);
let e = Boolean(` `);
let result = a + b + c + d + e;

console.log(result);

