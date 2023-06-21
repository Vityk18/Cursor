const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

import { maleList } from "./maleNamesList.js";
import { femaleList } from "./femaleNamesList.js";

const maleArr = maleList.replaceAll("\r", "").split("\n");
let maleNamesArr = [];
for (let element of maleArr) {
  if (element.length > 1) {
    maleNamesArr.push(element);
  }
}

const femaleArr = femaleList.replaceAll("\r", "").split("\n");
let femaleNamesArr = [];
for (let element of femaleArr) {
  if (element.length > 1) {
    femaleNamesArr.push(element);
  }
}

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над
// проєктом.У вас повинен вийти вкладений масив з парами студентів:
// [["Олександр", "Олена"], [..], [...]];

const pairArr = [];

const pair = (students) => {
  let boyArr = [];
  let girlArr = [];

  for (let element of students) {
    if (maleNamesArr.includes(element)) {
      boyArr.push(element);
    } else if (femaleArr.includes(element)) {
      girlArr.push(element);
    } else {
      return `введене імя "${element}" не знайдено. Додайте його в чоловічий, або жіночий список`;
    }
  }

  for (let i = 0; i < boyArr.length; i++) {
    pairArr.push(`${boyArr[i]} і ${girlArr[i]}`);
  }

  return pairArr;
};
console.log(pair(students));

// 2. Зіставте пари з попереднього завдання та теми проєктів, над
// якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена",
// "Теорія автоматів"], [...], [...]]

let allStudentsWithProject = [];
const studentsWithProject = (pair, theme) => {
  let studentsWithProject = [];

  for (let i = 0; i < pairArr.length; i++) {
    studentsWithProject = [`${pairArr[i]}, ${themes[i]}`];
    allStudentsWithProject.push(studentsWithProject);
  }

  return allStudentsWithProject;
};
console.log(studentsWithProject(pairArr, themes));

// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
// [...]]

function studentsMark() {
  const arr = [...marks];
  let studentsMarks = [];
  for (let i = 0; i < marks.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    let studentMark = [students[i], arr[randomIndex]];
    studentsMarks.push(studentMark);
    const removedElement = arr.splice(randomIndex, 1);
  }
  return studentsMarks;
}

console.log(studentsMark());

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
// (тут функція буде не чистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

let pairWithRandoomMarks = () => {
  const allPairsWithRandoomMarks = [];
  const pairWithRandoomMarks = [];
  for (let pair of allStudentsWithProject) {
    const randoomMark = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    pairWithRandoomMarks.push([`${pair}, ${randoomMark}`]);
    // allPairsWithRandoomMarks.push(pairWithRandoomMarks)
  }

  return pairWithRandoomMarks;
};

console.log(pairWithRandoomMarks());
