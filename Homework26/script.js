//1 Готово
// const users = [
//     { name: 'Alex', age: 24, isAdmin: false },
//     { name: 'Bob', age: 13, isAdmin: false },
//     { name: 'John', age: 31, isAdmin: true },
//     { name: 'Jane', age: 20, isAdmin: false },
// ]

// users.push({ name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true })
// console.log(users);

//1 Готово
const users = [
    { name: "Alex", age: 24, isAdmin: false },
    { name: "Bob", age: 13, isAdmin: false },
    { name: "John", age: 31, isAdmin: true },
    { name: "Jane", age: 20, isAdmin: false },
];

const addUsers = [
    { name: "Ann", age: 19, isAdmin: false },
    { name: "Jack", age: 43, isAdmin: true },
];

users.splice(users.length, 0, ...addUsers);
console.log(users);

//2 Готово

function sumAllAges(company) {
    let sum = 0;
    for (let i = 0; i < company.length; i++) {
        sum += users[i].age / company.length;
    }
    return sum;
}

console.log(sumAllAges(users));

//3

function getAllAdmins(users) {
    const admin = [];
    users.forEach((user) => {
        if (user.isAdmin === true) {
            admin.push(user);
        }
    });
    return admin;
}
const admins = getAllAdmins(users);
console.log(admins);

//4

function first(arr, n) {
    const result = [];
    if (n === 0) {
        return result;
    }
    if (n === undefined) {
        if (arr.length > 0) {
            result.push(arr[0]);
        }
        return result;
    }
    arr.forEach((element, index) => {
        if (index < n) {
            result.push(element);
        }
    });
    return result;
}

console.log(first([],));
