//  1.Створити функцію getMaxDigit(number) – яка отримує будь-яке
// число та виводить найбільшу цифру

const getMaxDigit = number => Math.max(...String(number))

console.log('1. getMaxDigit: ' + getMaxDigit(545264));

//  Варіант виконання задачі 2.0:

// function getMaxDigit(number) {
//     const numArray = [...String(number)]
//     let result = 0
//     for (let i = 0; i < numArray.length; i++) {
//         if (numArray[i] > result) {
//             result = numArray[i]
//         }
//     }
//     return result
// }
// console.log(getMaxDigit(4572));



// 2. Створити функцію, яка визначає ступінь числа. Не
// використовуючи Math.pow та **. Використовуйте цикл

function powNum(number, pow) {
    if (pow != 0) {
        let powNumber = number
        for (let i = 1; i < pow; i++) {
            powNumber *= number
        }
        return powNumber
    }
    else {
        return 1
    }
}
console.log(`2. powNum: ` + powNum(10, 1));



// 3. Створити функцію, яка форматує ім'я, роблячи першу букву
// великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function formatName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}
console.log(`3. formatName: ` + formatName('andrIy'))

//  Варіант виконання задачі 2.0:

// function formatName(name) {
//     const nameArray = [...name]
//     let correctNameArray = nameArray[0].toUpperCase()
//     for (let i = 1; i < nameArray.length; i++) {
//         correctNameArray += nameArray[i].toLowerCase()
//     }
//     return correctNameArray
// }
// console.log(formatName('aNdrIy'));



// 4. Створити функцію, яка вираховує суму, що залишається після
// оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
// 19.5%). Приклад: 1000 -> 805

const summAfterTax = (summ, tax) => summ - (summ * tax / 100)

console.log(`4. summAfterTax: ` + summAfterTax(1000, 30));



// 5. Створити функцію, яка повертає випадкове ціле число в
// діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(minVal, maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
}
console.log(`5. getRandomNumber: ` + getRandomNumber(1, 10));



// 6. Створити функцію, яка рахує скільки разів певна буква
// повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

const countLetter = (letter, word) =>
[...word].reduce((accumulator, currentValue) => {
    letter.toLowerCase() === currentValue.toLowerCase() ? accumulator++ : accumulator
    
    return accumulator
}, 0);
console.log(`6. countLetter: ` + countLetter("а", "Асталавіста"));


//  Варіант виконання задачі 2.0:

// function countLetter(letter, word) {
//     let result = 0
//     for (let i = 0; i < word.length; i++) {
//         if (letter.toLowerCase() === word[i].toLowerCase()) {
//             result++
//         }
//     }
//     return result
// }

// console.log(countLetter("а", "Асталавіста"));



// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в
// залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або
// convertCurrency("2500UAH") -> 100$

// 8. Врахуйте, інші валюти не конвертуються, потрібно виводити
// помилку, і також регістр uah не має значення.

//  Варіант виконання задачі 2.0:

const convertCurrency = (someCurrency) => {

   return someCurrency.toUpperCase().includes('UAH') ?
    parseInt(someCurrency) / 25 :
    someCurrency.includes('$') ?
    parseInt(someCurrency) * 25 :
    'Wrong Currency'
}
console.log(`8. convertCurrency: ` + convertCurrency("2500$"));





// 9. Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8
// символам.
// Приклад: getRandomPassword(4)

const getRandomPassword = (passLength = 8) => {
    // passLength === undefined ? passLength = 8 : passLength
    let result = ''
    for (let i = 0; i < passLength; i++) {
      result +=  Math.floor(Math.random() * 10)
    }
        return result
}
console.log(`9. getRandomPassword: ` + getRandomPassword(4));



// 10. Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters =(letter, text) => {

    return [...text].reduce((acc, currentValue) =>
    letter.toUpperCase() === currentValue.toUpperCase() ? acc : acc += currentValue
    )
}
console.log(`10. deleteLetters: ` + deleteLetters('a', "blablabla"));



// 11. Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
// isPalyndrom("Я несу гусеня") -> true

const isPalyndrom = (text) => {
    const temp = text.toLowerCase().replaceAll(" ", "")

    return [...temp].reverse().join('') === temp
}
console.log(`11. isPalyndrom: ` +  isPalyndrom("Я несу гусеня"));



// 12. Створіть функцію, яка видалить з речення букви, які
// зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
// "сктдеим"

const deleteDuplicateLetter = (text) => {
    let arr = [...text]
    let temp = []
    let result = ''
  for (let i = 0; i < arr.length; i++) {
    temp = arr.filter((el) => arr[i].toUpperCase() == el.toUpperCase());
    if (temp.length === 1) {
      result += temp;
    }
  }

  return result
};

console.log(`12. deleteDuplicateLetter: ` + deleteDuplicateLetter("Бісквіт був дуже ніжним"));
