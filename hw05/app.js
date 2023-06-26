// 1.Створіть функцію getRandomArray(length, min, max) – яка
// повертає масив випадкових цілих чисел. У функції є параметри: length -
// довжина масиву, min – мінімальне значення цілого числа, max – максимальне
// значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandomArray = (length, min, max) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    result.push(randomNumber);
  }

  return result;
};

console.log(`1. getRandomArray: ` + getRandomArray(15, 1, 100));

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getModa = (...numbers) => {
  let moda = 0;
  let result;

  numbers.forEach((item) => {
    if (Number.isInteger(item)) {
      const numberOfItems = numbers.filter(
        (element) => element === item
      ).length;

      if (numberOfItems > moda) {
        moda = numberOfItems;
        result = item;
      }
    }
  });

  return result;
};

console.log(
  `2. getModa: ` +
    getModa(6, 2, 3, 3, 3, 3, 3, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//  Варіант виконання задачі 2.0:

// const getModa = (...numbers) => {
//   let result;
//   let moda = 0;
//   numbers.forEach((item) => {
//     if (Number.isInteger(item)) {
//     let numberOfItems = numbers.reduce((acc, element) => {
//       if (item === element) {
//         acc++;
//       }
//       return acc;
//     }, 0);
//     if (numberOfItems > moda) {
//       moda = numberOfItems;
//       result = item;
//     }
// }
//   });

//   return result;
// };

// console.log(
//   `2. getModa: ` +
//     getModa(6, 2, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 2, 3, 3, 3, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
// );

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
// всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) => {
  let arrLength = numbers.length;
  const sum = numbers.reduce((acc, item) => {
    Number.isInteger(item) ? (acc += item) : (arrLength = arrLength - 1);
    return acc;
  }, 0);

  return sum / arrLength;
};

console.log(
  `3. getAverage: ` +
    getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (...numbers) => {
  const sortedArr = numbers
    .filter((item) => Number.isInteger(item))
    .sort((a, b) => a - b);
  if (sortedArr.length % 2 === 0) {
    return (
      (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1]) /
      2
    );
  }

  return sortedArr[Math.floor(sortedArr.length / 2)];
};

console.log(`4. getMedian: ` + getMedian(1, 2, 3, 4));

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
// передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = (...numbers) => {
  const result = numbers.filter((item) => item % 2 != 0);

  return result;
};

console.log(`5. filterEvenNumbers: ` + filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
// чисел більших
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = (...numbers) =>
  numbers.filter((item) => item > 0).length;

console.log(
  `6. countPositiveNumbers: ` + countPositiveNumbers(1, -2, 3, -4, -5, 6)
);

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
// в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (...numbers) =>
  numbers.filter((item) => item % 5 === 0);

console.log('7. getDividedByFive: ' + 
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
// замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
// розбити масив на слова за допомогою функції .split(" "), після чого масив
// необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
// можливість розширювати cписок цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
// kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

const replaceBadWords = (string) => {
  //  console.log(string.replace(/(shit|fuck)/gi, '***'));  // найпростіший варіант розв'язку задачі

  const badWords = ["shit", "fuck"]; // Додайте нові слова в масив, щоб розширити список поганих слів
  const stringArr = string.split(" ");
  let newArr = badWords.map((item) =>
    stringArr.filter((element) => {
      if (element.includes(item)) return element;
    })
  );
  console.log(newArr);
};

console.log(replaceBadWords("Are you fucking kidding?"));
console.log("asd".includes("s"));
