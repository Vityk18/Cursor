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
      const numberOfItems = numbers.filter((element) => element === item).length;
      
      if (numberOfItems > moda) {
        moda = numberOfItems;
        result = item;
      }
    }
  });
  
  return result;
};

console.log(`2. getModa: ` + getModa
(6, 2, 3, 3, 3, 3, 3, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



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
let arrLength = numbers.length
const sum = numbers.reduce((acc, item) => {
Number.isInteger(item) ? 
acc+= item :
arrLength = arrLength - 1
return acc
},0)

  return sum / arrLength
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (...numbers) => {
  const sortedArr = numbers.sort((a, b) => a - b)
  if (Number.isInteger(item)) {
  
  }
return 
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));