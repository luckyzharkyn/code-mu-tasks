// Задача 2
// Отделение троек цифр в числе

// Дано число, например такое:
// '12345678'

// Отделите пробелом каждую тройку чисел с конца. То есть у нас должно получится:
// '12 345 678'

let figures = "12345678";
let count = 0;
const newArray = [];

figures
  .split("")
  .reverse()
  .forEach((figure) => {
    newArray.push(figure);
    if (count >= 2) {
      newArray.push(" ");
      count = 0;
    } else {
        count++;
    }
  });

const result = newArray.reverse().join("");
console.log("result::: ", result);
