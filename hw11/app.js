function getRandomChinese(length) {
const promice = new Promise((resolve) => {
 return resolve()
})

let i = 0
while (i < length) {
  promice.then(() => {
    console.log(new Date().getTime())
  })
  i++
}

}

getRandomChinese(8)