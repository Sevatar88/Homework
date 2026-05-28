//1

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

//2

let number = +prompt("Введите число для получения факториала:");

let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(`Факториал числа ${number} равен ${factorial}`);

//3

let board = "";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            board += "# ";
        } else {
            board += "  ";
        }
    }
    board += "\n";
}

console.log(board);
