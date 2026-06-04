//1
const person = {
    name: "Alexander",
    age: 38,
    isStudent: true,
};

console.log(person);

//2

const obj = {};

const isEmpty = (object) => {
    if (typeof object !== "object" || object === null) {
        return true;
    }

    for (let key in object) {
        return false;
    }
    return true;
};

console.log(isEmpty(obj));

//3

const task = {
    title: "Дела на сегодня",
    description: "Нужно реализовать функцию клонирования и модификации объекта",
    isCompleted: false,
};

const cloneAndModify = (object, modifications) => {
    return {
        ...object,
        ...modifications,
    };
};
const modifications = {
    title: "На сегодня хватит",
    isCompleted: true,
};
const updatedTask = cloneAndModify(task, modifications);
for (const key in updatedTask) {
    console.log(`${key}: ${updatedTask[key]}`);
}

//4

const callAllMethods = (obj) => {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (typeof obj[key] === "function") {
            try {
                obj[key]();
            } catch (error) {
                console.error(`Ошибка при вызове метода ${key}:`, error);
            }
        }
    }
}
const myObject = {
    method1: function () {
        console.log("Метод 1 вызван");
    },
    method2: function () {
        console.log("Метод 2 вызван");
    },
    property: "не метод",
};

callAllMethods(myObject);