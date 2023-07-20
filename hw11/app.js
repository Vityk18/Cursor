let length;
const butt = document.querySelector("#send");
butt.onclick = function () {
  length = document.querySelector("#input").value;
  getRandomChinese(length);
};

function getRandomChinese(leng) {
  const delay = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(), 50);
    });

  async function getSymbol() {
    let result = "";
    while (leng > 0) {
      await delay();
      const date = new Date().getTime().toString();
      const sign = date[8] + date[9] + date[10] + date[11] + date[12];
      result += String.fromCharCode(sign);
      document.getElementById("myOutput").innerHTML = result;
      console.log(leng);
      leng--;
    }
  }
  getSymbol();
}

console.log("
: ", 
);