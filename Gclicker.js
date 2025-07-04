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

const levelUp = () => {
  let object = false;
  const now = new Date();
  if (num >= price) {
    lvl++;
    num -= price;
    object = {
      time: `${now.getHours()}:${now.getMinutes()}`,

      title: `${lvl}Lvl`,
      price: -price,
    };
    console.log(1, -price);
    (price *= 1.05).toFixed(1);
  }
  if (object) arr.push(object);
  // console.log(arr);
  reload();
};

const funk = () => {
  num += lvl;

  reload();
};

const clearArr = () => {
  arr = [];
  reload();
};
alert("Для початку натисніть кнопку +1");
