// 1. У стдентів повинні бути наступні властивості: university, course, fullName,
// вони передаються при створенні студента(в конструктор).
// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії
// м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про
// курс, учбовий заклад та імені студента.
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4,
// 4, 5]
// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку
// студенту. Після того, як оцінка поставлена, геттер повинен повернути масив
// this.marks -> [5, 4, 4, 5, 5]
// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього
// методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких
// помилок, просто повертається завжди null замість масиву оцінок)
// 7. Створіть метод this.recover, який дозволить поновити студента

class Student {
  constructor(university, course, fullName, marks) {
    this.university = university ?? "Undefined university";
    this.course = course ?? "Undefined course";
    this.fullName = fullName ?? "Undefined fullName";
    this.marks = marks ?? "Undefined fullName";
  }

  getInfo() {
    console.log(
      `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}.`
    );
  }

  set setStudenrMark(item) {
    this.marks === null ? null : this.marks.push(item);
  }

  get getStudentMarks() {
    // console.log(this.marks);
    return this.marks;
  }

  getAverageMark() {
    const avrMark = (
      this.marks.reduce((acc, item) => (acc += item)) / this.marks.length
    ).toFixed(1);
    // console.log(avrMark);
    return avrMark;
  }

  dismiss() {
    this.oldMarks = this.marks;
    this.marks = null;
    // console.log(student1.marks);
    // console.log(this.oldMarks);
  }

  recover() {
    this.marks = this.oldMarks;
  }
}

const student1 = new Student(
  `Вищої Школи Психотерапії м.Одеса`,
  1,
  `Остап Родоманський Бендер`,
  [5, 4, 4, 5]
);

// student1.getInfo();
// student1.setStudenrMark = 5;
// student1.getStudentMarks;
// student1.getAverageMark();
// student1.dismiss();
// student1.setStudenrMark = 3;
// student1.recover();
// console.log(student1.marks);

// Advanced
// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// 2. Бюджетний студент може отримати стипендію за допомогою методу
// this.getScholarship.
// Отримання стипендії супроводжується виведенням інформації в консоль: Ви
// отримали 1400 грн. стипендії
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе
// створення об'єкту. Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього
// вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так
// очевидно :) )

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setInterval(() => student2.getScholarship(), 30000);
    this.log = "007";
  }
  getScholarship() {
    if (this.marks === null) {
      return null;
    }
    // console.log(`Ви отримали 1400 грн. стипендії`);
    else if (this.getAverageMark() >= 4.0) {
      return console.log(`Ви отримали 1400 грн. стипендії`);
    }
  }
}

const student2 = new BudgetStudent(
  "NU LP",
  3,
  "James Bond",
  [4, 5, 3, 5, 4, 4]
);
// // student2.dismiss()
// student2.getScholarship();
