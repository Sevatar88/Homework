const firstName = `Alexandr `;
const lastName = `Veselov `;
const isStudent = true;

console.log(firstName);
console.log(lastName);
console.log(isStudent);

const age = 38;
const currentYear = 2026;
const birthYear = currentYear - age;

const aa = `Меня зовут `;
const bb = firstName;
const cc = lastName;
const dd = `, мне `;
const ee = age;
const f = ` лет.`;
const g = `Я ученик курса: `;
const h = isStudent;
const Result = aa + bb + cc + dd + ee + f + g + h;

console.log(Result);

console.log(age);
console.log(currentYear);
console.log(birthYear);

let a = `123`;
let b = +`456`;
let c = Number(`789`);
let d = Boolean(0);
let e = Boolean(` `);
let result = a + b + c + d + e;

console.log(result);

