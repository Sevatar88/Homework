//1 

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
    const discount = (basePrice * discountPercent) / 100;
    const discountedPrise = basePrice - discount;
    const tax = discountedPrise * taxRate;
    return discountedPrise + tax;
}

const basePrice = +prompt("Введите базовую стоимость в рублях");
const discountPercent = +prompt("Введите процент скидки");
const taxRate = +prompt("Введите налоговую ставку");
console.log(calculateFinalPrice(basePrice, discountPercent, taxRate));


//2 

function checkAccess(login, password) {
    if ((login === "admin" || login === "Admin") && password === "123456") {
        return "Доступ разрешён";
    } else {
        return "Доступ запрещён";
    }
}

const login = prompt("Введите имя пользователя");
const password = prompt("Введите пароль");
console.log(checkAccess(login, password));

//3 

function getTimeOfDay(number) {
    if (number >= 0 && number <= 5) {
        return "Ночь";
    } else if (number >= 6 && number <= 11) {
        return "Утро";
    } else if (number >= 12 && number <= 17) {
        return "День";
    } else if (number >= 18 && number <= 23) {
        return "Вечер";
    } else {
        return "Некорректное время";
    }
}

const number = +prompt("Введите текущее время");
console.log(getTimeOfDay(number));

//4 

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) return i;
    }
    return "Нет чётных чисел";
}

const start = +prompt("Введите первое число");
const end = +prompt("Введите второе число");
console.log(findFirstEven(start, end));
