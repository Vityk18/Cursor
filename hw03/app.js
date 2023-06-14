// //  1.Створити функцію getMaxDigit(number) – яка отримує будь-яке
// // число та виводить найбільшу цифру

// const getMaxDigit = number => Math.max(...String(number))

// console.log(getMaxDigit(545264));





// //  Варіант виконання задачі 2.0:

// // function getMaxDigit(number) {
// //     const numArray = [...String(number)]
// //     let result = 0
// //     for (let i = 0; i < numArray.length; i++) {
// //         if (numArray[i] > result) {
// //             result = numArray[i]
// //         }
// //     }
// //     return result
// // }

// // console.log(getMaxDigit(4572));


// // 2. Створити функцію, яка визначає ступінь числа. Не
// // використовуючи Math.pow та **. Використовуйте цикл

// function powNum(number, pow) {
//     if (pow != 0) {
//         let powNumber = number
//         for (let i = 1; i < pow; i++) {
//             powNumber *= number
//         }
//         return powNumber
//     }
//     else {
//         return 1
//     }
// }

// console.log(powNum(10, 1));


// // 3. Створити функцію, яка форматує ім'я, роблячи першу букву
// // великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);


// function formatName(name) {
//     return name[0].toUpperCase() + name.slice(1).toLowerCase()
// }
// console.log(formatName('AndrIy'))

// //  Варіант виконання задачі 2.0:

// // function formatName(name) {
// //     const nameArray = [...name]
// //     let correctNameArray = nameArray[0].toUpperCase()
// //     for (let i = 1; i < nameArray.length; i++) {
// //         correctNameArray += nameArray[i].toLowerCase()
// //     }

// //     return correctNameArray
// // }

// // console.log(formatName('aNdrIy'));


// // 4. Створити функцію, яка вираховує суму, що залишається після
// // оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
// // 19.5%). Приклад: 1000 -> 805

// const summAfterTax = (summ, tax) => summ - (summ * tax / 100)


// console.log(summAfterTax(1000, 30));


// // 5. Створити функцію, яка повертає випадкове ціле число в
// // діапазоні від N до M.
// // Приклад: getRandomNumber(1, 10) -> 5

// function getRandomNumber(minVal, maxVal) {
//     return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
// }

// console.log(getRandomNumber(1, 10));


// // 6. Створити функцію, яка рахує скільки разів певна буква
// // повторюється в слові.
// // Приклад: countLetter("а", "Асталавіста") -> 4


// const countLetter = (letter, word) => 
// [...word].reduce((accumulator, currentValue) => {
//     letter.toLowerCase() === currentValue.toLowerCase() ? accumulator++ : accumulator
//     return accumulator
// }, 0);
// console.log(countLetter("А", "Асталавіста"));

// // function countLetter(letter, word) {
// //     let result = 0
// //     for (let i = 0; i < word.length; i++) {
// //         if (letter.toLowerCase() === word[i].toLowerCase()) {
// //             result++
// //         }
// //     }
// //     return result
// // }

// // console.log(countLetter("а", "Асталавіста"));


// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в
// залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або
// convertCurrency("2500UAH") -> 100$


const convertCurrency = (someCurrency) => {
   return someCurrency.includes('UAH') ? 
    (parseInt(someCurrency) / 25) :
    (someCurrency.includes('$') ? 
    (parseInt(someCurrency) * 25 :
    'Wrong Currency'))
}


console.log(convertCurrency("2500UAH"));