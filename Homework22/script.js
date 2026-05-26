//Задание №1

const number = +prompt("Введите число");

if (number % 2 === 0) {
    alert("число чётное");
} else {
    alert("число нечётное");
}

// //Задание №2

const age = +prompt("Укажите Ваш возраст");
const a = age < 18;
const b = age >=18 && age <=65;
const discount = a
    ? "Ваша скидка 10%"
    : b
    ? "Ваша скидка 20%"
    : "Ваша скидка 30%";
alert(discount);

const age1 = +prompt("Укажите Ваш возраст");
const a1 = age1 < 18;
const b1 = age1 >= 18 && age1 <= 65;
const c1 = age > 65;
switch (true) {
    case a1:
        alert("Ваша скидка 10%");
        break;
    case b1:
        alert("Ваша скидка 20%");
        break;
    case c1:
        alert("Ваша скидка 30%");
        break;
}

//Задание №3

const username = prompt("Введите Имя пользователя");
const password = +prompt("Введите пароль");

if ((username === "admin" || "user") && password === 123456) {
    alert("Доступ разрешён");
} else {
    alert("Доступ запрещён");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Задание №4
//1.1
const deliveryWeight = +prompt("Укажите вес посылки в килограммах"); 
//1.2
if (deliveryWeight < 0 || deliveryWeight === 0) {
    //2.1
    alert("Неверный вес посылки");
} else {
    alert("Вес посылки " + deliveryWeight + "кг");
}

const deliveryType = prompt("Укажите тип доставки"); 

switch (
    deliveryType 
) {
    case "Cтандарт":
    case "стандарт":
        alert("Выбран тип доставки - Стандарт");
        break;
    case "Экспресс":
    case "экспресс":
        alert("Выбран тип доставки - Экспресс");
        break;
    case "Премиум":
    case "премиум":
        alert("Выбран тип доставки - Премиум");
        break;
    default://2.2
        alert("Неверный тип доставки");
}
//3
const x = deliveryWeight < 1; 
const y = deliveryWeight >=1 && deliveryWeight <= 5;
const basePrice = x
    ? "Базовая стоимость - " + 5 + "$"
    : y
    ? "Базовая стоимость - " + 10 + "$"
    : "Базовая стоимость - " + 15 + "$";
alert(basePrice);

const ratio = deliveryType;

switch (ratio) {
    case "Стандарт":
        alert("Коэффициент - 1");
        break;
    case "Экспресс":
        alert("Коэффициент - 1.5");
        break;
    case "Премиум":
        alert("Коэффициент - 2");
}


const multiPrice = Number(basePrice) * Number(ratio);
const result = "Итоговая стоимость доставки составила - " + multiPrice + "$"; //5
alert(result);

