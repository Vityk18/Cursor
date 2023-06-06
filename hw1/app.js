let a = 15.678; // first good
let b = 123.965; // second good
let c = 90.2345; // third good

const maxPrice = Math.max(a, b, c)
const minPrice = Math.min(a, b, c)

console.log(`max price: ${maxPrice}`);
console.log(`min price: ${minPrice}`);

const SummAllGoods = a + b + c;
console.log(`SummAllGoods: ${SummAllGoods}`);

const SummInteger = Math.floor(a) + Math.floor(b) + Math.floor(c);
console.log(`SummInteger: ${SummInteger}`);

const RoundTo100 = Math.round(Math.floor(SummAllGoods) / 100) * 100;
console.log(`RoundTo100: ${RoundTo100}`);

const isEven = Math.floor(SummAllGoods) % 2 === 0;
console.log(`isEven: ${isEven}`);

const restFrom500 = 500 - SummAllGoods;
console.log(`restFrom500: ${restFrom500}`);

console.log(`roundedToHundreds a: ${a.toFixed(2)}`);
console.log(`roundedToHundreds b: ${b.toFixed(2)}`);
console.log(`roundedToHundreds c: ${c.toFixed(2)}`);


const randomSale = Math.round(Math.random() * 100);
const SalingPrice = (SummAllGoods - (SummAllGoods * randomSale / 100)).toFixed(2);

console.log(`Your sale is: ${randomSale}%`);
console.log(`Summ with sale is: ${SalingPrice}`);

const profit = (SalingPrice - (SummAllGoods / 2)).toFixed(2);
console.log(`Your Profit is: ${profit}`);

console.log(`max price: ${maxPrice}; min price: ${minPrice}; SummAllGoods: ${SummAllGoods}; SummInteger: ${SummInteger}; RoundTo100: ${RoundTo100}; isEven: ${isEven}; isEven: ${isEven}; restFrom500: ${restFrom500}; restFrom500: ${restFrom500}; roundedToHundreds a: ${a.toFixed(2)}; roundedToHundreds b: ${b.toFixed(2)}; roundedToHundreds c: ${c.toFixed(2)}; Your sale is: ${randomSale}%; Summ with sale is: ${SalingPrice}; Your Profit is: ${profit}`);