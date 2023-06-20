const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над
// проєктом.У вас повинен вийти вкладений масив з парами студентів:
// [["Олександр", "Олена"], [..], [...]];



fetch('maleNamesList.txt')
  .then(response => response.text())
  .then(data => {
    // Отримання тексту з файлу імен
   const names = data.replaceAll("\r", "").split('\n');
   let maleNames = []
   for (let i = 0; i < names.length; i++) {
    if (names[i].length > 1) {
        maleNames.push(names[i])
    }
   }

    // console.log(maleNames); // Виведення списку імен у консоль
    // Ваш код для роботи зі списком імен
  })
  .catch(error => console.error('Сталася помилка під час завантаження файлу:', error));

const funnc = (bg) =>
console.log(bg);

funnc(maleNames)

const pairArr = (stud) => {

   

//    const maleNamesArr = maleNamesList.split(`\n`)
//    let maleNames = []
//    for (i = 0; i < maleNamesArr.length; i++) {
//        if (maleNamesArr[i].length > 1) {
//         maleNames.push(maleNamesArr[i])
//        }
//    }
// return maleNames




}
console.log(pairArr(students));



// 2. Зіставте пари з попереднього завдання та теми проєктів, над
// якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена",
// "Теорія автоматів"], [...], [...]]

const studentsWithProject = [`${pairArr[0]}, ${themes[0]}`, `${pairArr[1]}, ${themes[1]}`, `${pairArr[2]}, ${themes[2]}`, ]

console.log(studentsWithProject);



// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
// [...]]

// const studentMark = [students + marks]

// console.log(studentMark);


console.log(`-----------------------------check line------------------------------`);
console.log(students);
console.log(themes);
console.log(marks);

