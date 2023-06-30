const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const country = litva;

// 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
// скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
  const taxes = salary * this.tax;
  console.log(`1. getMyTaxes: ` + taxes);

  return taxes;
}

getMyTaxes.call(country, 100);

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
// скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
// middleSalary). Функція повинна викликатись через call та працювати з даними
// через this

function getMiddleTaxes() {
  const taxes = this.middleSalary * this.tax;
  console.log(`2. getMiddleTaxes: ` + taxes);

  return taxes;
}

getMiddleTaxes.call(country);

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
// всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
// vacancies). Функція повинна викликатись через call та працювати з даними
// через this

function getTotalTaxes() {
  const { tax, middleSalary, vacancies } = this;
  const allTaxes = tax * middleSalary * vacancies;
  console.log(`3. getTotalTaxes: ` + allTaxes);
  return allTaxes;
}

getTotalTaxes.call(country);

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
// виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
// розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval

function getMySalary() {
  setInterval(() => {
    const newObj = {
      salary: Math.floor(Math.random() * (2000 - 1500 + 1) + 1500),
    };
    newObj.taxes = Number((this.tax * newObj.salary).toFixed(2));
    newObj.profit = newObj.salary - newObj.taxes;
    console.log(newObj);
  }, 20000);
}

getMySalary.call(country);
