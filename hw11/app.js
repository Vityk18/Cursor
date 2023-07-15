let length;
const butt = document.querySelector('#send');
butt.onclick = function () {
  const length = document.querySelector('#input').value;
  getRandomChinese(length)
}
console.log(length);

function getRandomChinese(leng) {
const promice = new Promise((resolve) => {
  resolve()
})

let i = 0
let result = ''
while (i < leng) {
  promice.then(() => {
   const date = new Date().getTime().toString()
   const sign = date[8] + date[9] + date[10] + date[11] + date[12]
   result += String.fromCharCode(sign);
    document.getElementById("myOutput").innerHTML = result
  })
  i++
}
}




