// Завдання 1:
// Створіть нескінченний генератор ідентифікаторів.
// Повинен працювати наступним чином:
// const idGenerator = createIdGenerator();
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3
// ...

function* createIdGenerator(){
  let res = 0
while (true) {
    yield res++
  }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

// // Завдання 2 (advanced)
// // Створіть генератор, який буде регулювати розміри шрифту для
// // вашого сайту.
// // (Можна допрацювати, щоб реально змінював шрифт, але це не є
// // обов'язковою умовою)
// // Працювати генератор буде наступним чином:
// // const fontGenerator = newFontGenerator(14); // 14 – стартове
// // значення
// // fontGenerator.next("up").value -> 14
// // fontGenerator.next("up").value -> 16
// // fontGenerator.next("up").value -> 18
// // fontGenerator.next().value -> 18
// // fontGenerator.next("down").value -> 16
// // fontGenerator.next("down").value -> 14
// // fontGenerator.next("down").value -> 12
// // fontGenerator.next().value -> 12

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
plus.addEventListener("click", plus2)
minus.addEventListener("click", minus2)

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 107 || event.keyCode === 187) {
    plus2();
  }
})

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 109 || event.keyCode === 189) {
    minus2();
  }
})

function* newFontGenerator(size) {
  let fontSize = document.querySelector('#font')
  fontSize.style.fontSize = `${size}px`

  while (true) {
    const input = yield size;

    if (input === "up") {
      size += 2; 
    } else if (input === "down" & size > 2) {
      size -= 2; 
    } else {
      size; 
    }
    fontSize.style.fontSize = `${size}px`
  
  }
}

const fontGenerator = newFontGenerator(14)
fontGenerator.next().value

function plus2() {
  console.log(fontGenerator.next("up").value)
}

function minus2() {
  console.log(fontGenerator.next("down").value)
}
