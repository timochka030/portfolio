function formator(item) {
  let priceText;
  if (typeof item === "number") {
    if (Math.abs(item) >= 1000000) {
      priceText = (item / 1000000).toFixed(1) + "M";
    } else if (Math.abs(item) >= 1000) {
      priceText = (item / 1000).toFixed(1) + "K";
    } else {
      priceText = item.toFixed(1);
    }
  } else {
    priceText = item;
  }
  return priceText;
}
let clicker = false;

let arr = [];

let num = 100;
let lvl = 0;
let price = 100;
const number = document.getElementById("number");
const level = document.getElementById("lvl");
const price0 = document.getElementById("price");
const consoleGame = document.getElementById("console");
const line = document.getElementById("line");
const reload = () => {
  level.innerHTML = lvl;
  price0.innerHTML = formator(price);
  number.innerHTML = formator(num);
  consoleGame.innerHTML = funkli();

  line.value = num;
  line.max = price;
};
const funkli = () => {
  let result = `<div>
            <i>Transactions</i>
            <button class="btn__game" onclick="clearArr()">clear</button>
          </div>
          <div>
            <div>Час</div>
            <div style="color: red">Ціна</div>
            <div style="color: green">+LVL</div>
          </div>`;
  for (const i of arr) {
    result += `<div><div>${i.time}</div><div style="color: red">${formator(
      i.price
    )}</div><div style="color: green">${i.title}</div></div>`;
  }
  console.log(result);
  return result;
};

const byClicker = () => {
  if (num >= 3000 && clicker === false) {
    clicker = true;
    num -= 3000;
    Transaction("Auto-clicker", 3000);
  } else console.error();
};

function Transaction(title, price) {
  const now = new Date();

  arr.push({
    time: `${now.getHours()}:${now.getMinutes()}`,
    title: title,
    price: formator(price),
  });
}

const levelUp = () => {
  let object = false;
  if (num >= price) {
    lvl++;
    num -= price;
    object = {
      title: `${lvl}Lvl`,
      price: -price,
    };
    console.log(1, -price);
    (price *= 1.05).toFixed(1);
  }
  if (object) Transaction(object.title, object.price);
  // console.log(arr);
  reload();
};

const funk = (x) => {
  num += x || lvl;

  reload();
};

const clearArr = () => {
  arr = [];
  reload();
};
alert("Для початку натисніть кнопку +1");

setInterval(() => {
  if (clicker) funk(1);
  // reload();
}, 1000);
setTimeout(reload, 10000);

// setTimeout(() => {
//   alert("Ви людина?");
// }, 60000);
