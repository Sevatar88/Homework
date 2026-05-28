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

const age1 = prompt("Укажите Ваш возраст");
const a1 = age1 < 18;
const b1 = age1 >= 18 && age1 <= 65;
const c1 = age1 > 65;

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
STANDARD = "Стандарт"
EXPRESS = "Экспресс"
PREMIUM = "Премиум"
const deliveryWeight = +prompt("Укажите вес посылки в килограммах");
//1.2

if (deliveryWeight <= 0 || isNaN(deliveryWeight)) {
    //2.1
    alert("Неверный вес посылки");
} else {
    const deliveryType = prompt(
        `Укажите тип доставки (Стандарт, Экспресс, Премиум)`
    );

    const basePrice = deliveryWeight < 1 ? 5 : deliveryWeight <= 5 ? 10 : 15;
    let ratio = 0;

    switch (deliveryType) {
        case STANDARD:
            ratio = 1;
            break;
        case EXPRESS:
            ratio = 1.5;
            break;
        case PREMIUM:
            ratio = 2;
            break;
        default:
            alert("Неверный тип доставки");
            ratio = 0;
    }

    if (ratio !== 0) {
        const finalPrice = basePrice * ratio;
        alert(`Итоговая стоимость доставки: ${finalPrice}$`);
    }
}
