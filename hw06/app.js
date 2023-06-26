const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1.  Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
// science"] - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
// замінити на пробіл

const getSubjects = (obj) => {
  return Object.keys(obj.subjects).map(
    (item) => item[0].toUpperCase() + item.slice(1).replaceAll("_", " ")
  );
};
console.log(`1. getSubjects: `);
console.log(getSubjects(students[0]));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
// середню оцінку по усім предметам для переданого студента НЕ МАСИВА
// СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)

const getAverageMark = (obj) => {
  const subjectsVal = Object.values(obj.subjects); // отримаємо масив з масивами всіх оцінок obj.subjects
  const arrAllMarks = [].concat(...subjectsVal); // обєднали в єдиний масив з оцінок
  const avrgMark =
    arrAllMarks.reduce((acc, item) => (acc += item), 0) / arrAllMarks.length; // отримаємо середній бал

  return avrgMark.toFixed(2);
};

console.log(`2. getAverageMark: ` + getAverageMark(students[0]));

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
// "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
// переданому студенту (вам знадобиться функція з попереднього завдання).
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = (obj) => {
  const newObj = {
    name: obj.name,
    course: obj.course,
    averageMark: getAverageMark(obj),
  };
  return newObj;
};

console.log(`3. getStudentInfo :`);
console.log(getStudentInfo(students[0]));

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (arrObj) => {
  const arr = [];

  for (let el of arrObj) {
    arr.push(el.name);
  }

  return arr.sort();
};

console.log(`4. getStudentsNames: `);
console.log(getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
// кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (arrObj) => {
  let theBestSudent = "";
  let mark = 0;
  for (let i in arrObj) {
    if (getAverageMark(arrObj[i]) > mark) {
      mark = getAverageMark(arrObj[i]);
      theBestSudent = arrObj[i].name;
    }
  }

  return theBestSudent;
};

console.log(`5. getBestStudent: ` + getBestStudent(students));

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень.

const calculateWordLetters = (word) => {
  let arr = [...word];
  let newObj = {};

  arr.forEach((element) => {
    let strNum = arr.reduce((accumulator, currentValue) => {
      element.toLowerCase() === currentValue.toLowerCase()
        ? accumulator++
        : accumulator;
      return accumulator;
    }, 0);
    newObj[`${element}`] = strNum;
  });

  return newObj;
};

console.log(`6. calculateWordLetters: `);
console.log(calculateWordLetters("тест"));
