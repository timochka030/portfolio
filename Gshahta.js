let prizeList = [
  {
    name: "Залізо",
  },
  {
    name: "Мідь",
  },
  {
    name: "Залізо",
  },
  {
    name: "Алюміній",
  },
  {
    name: "Залізо",
  },
  {
    name: "Золото",
  },
  {
    name: "Залізо",
  },
  {
    name: "Мідь",
  },
  {
    name: "Алюміній",
  },
  {
    name: "Залізо",
  },
];

let lvl = 1;
let click = lvl;
let energy = 100;
let money = 0;
let metall = 0;
let aluminiy = 0;
let mid = 0;
let zoloto = 0;
let price = 1000;
let prize = "";

let numClick = 0;

let chat = 0;

//////////////////////////////////////////////////////////////////////////////////////////////
let number = 100;

// let kvestList = [
//   {
//     text: `Клікніть ${number} раз`,
//   },
// ];

let prizer = 1000;

////////////////////////////////////////////////////////////////////////////////////////////

function reload() {
  document.getElementById("metall").innerHTML = `${metall.toFixed(2)}`;
  document.getElementById("aluminiy").innerHTML = `${aluminiy.toFixed(2)}`;
  document.getElementById("mid").innerHTML = `${mid.toFixed(2)}`;
  document.getElementById("zoloto").innerHTML = `${zoloto.toFixed(2)}`;

  document.getElementById("money").innerHTML = `${money.toFixed(2)}`;
  document.getElementById("energy").innerHTML = energy;

  document.getElementById("price").innerHTML = price;
  document.getElementById("level").innerHTML = lvl;
  document.getElementById("level2").innerHTML = lvl;

  document.getElementById("speed").innerHTML = speedShahta / 1000;
  document.getElementById("peopleList").innerHTML = people;
}

const btnClick = function getBox() {
  const result = prizeList[Math.round(Math.random() * 10)];
  if (energy > 0) {
    // numClick += Infinity;
    numClick += lvl;
    energy -= 1;

    function massa() {
      if (result.name === "Залізо") {
        return Math.random() * 10;
      }
      if (result.name === "Алюміній") {
        return Math.random() * 5;
      }
      if (result.name === "Мідь") {
        return Math.random() * 3;
      }
      if (result.name === "Золото") {
        return Math.random() * 2;
      }
    }
    result.massa = massa();
    prize = `${result.name} ${result.massa.toFixed(2)}`;
    if (result.name === "Залізо") {
      metall += Number(result.massa);
      prizeUrl = "img/metall.png";
    } else if (result.name === "Алюміній") {
      aluminiy += result.massa;
      prizeUrl = "img/aluminiy.png";
    } else if (result.name === "Мідь") {
      mid += result.massa;
      prizeUrl = "img/mid.png";
    } else if (result.name === "Золото") {
      zoloto += result.massa;
      prizeUrl = "img/zoloto.png";
    }
    document.getElementById("result").innerHTML = `${prize}кг`;

    document.getElementById("error").innerHTML = ``;
    document.getElementById("errorE").innerHTML = ``;
  } else {
    document.getElementById("result").innerHTML = `Помилка недостатньо енергії`;
  }
};
document.getElementById("my-btn").onclick = btnClick;

const sell = function getMoney() {
  money += metall * lvl;
  metall = 0;

  money += aluminiy * 4 * lvl;
  aluminiy = 0;

  money += mid * 6 * lvl;
  mid = 0;

  money += zoloto * 100 * lvl;
  zoloto = 0;
};
document.getElementById("money").onclick = sell;

document.getElementById("metallBlock").onclick = function getMoney() {
  money += metall * lvl;
  metall = 0;
};

document.getElementById("aluminiyBlock").onclick = function getMoney() {
  money += aluminiy * 4 * lvl;
  aluminiy = 0;
};

document.getElementById("midBlock").onclick = function getMoney() {
  money += mid * 6 * lvl;
  mid = 0;
};

document.getElementById("zolotoBlock").onclick = function getMoney() {
  money += zoloto * 100 * lvl;
  zoloto = 0;
};

document.getElementById("levelUp").onclick = function levelUp() {
  if (lvl === 1 && money >= price) {
    lvl++;
    money -= price;
    price = 2000;
  } else if (lvl === 2 && money >= price) {
    lvl++;
    money -= price;
    price = 4000;
  } else if (lvl === 3 && money >= price) {
    lvl++;
    money -= price;
    price = 8000;
  } else if (lvl === 4 && money >= price) {
    lvl++;
    money -= price;
    price = 32000;
  } else if (lvl === 5 && money >= price) {
    lvl++;
    money -= price;
    price = 64000;
  } else if (lvl === 6 && money >= price) {
    lvl++;
    money -= price;
    price = 128000;
  } else if (lvl === 7 && money >= price) {
    lvl++;
    money -= price;
    price = 256000;
  } else if (lvl === 8 && money >= price) {
    lvl++;
    money -= price;
    price = 512000;
  } else if (lvl === 9 && money >= price) {
    lvl++;
    money -= price;
    price = 1024000;
  } else if (lvl === 10 && money >= price) {
    lvl++;
    money -= price;
    price = 2048000;
  } else if (lvl === 11 && money >= price) {
    lvl++;
    money -= price;
    price = 4096000;
  } else if (lvl === 12 && money >= price) {
    lvl++;
    money -= price;
    price = 8192000;
  } else if (lvl === 13 && money >= price) {
    lvl++;
    money -= price;

    price = 16384000;
  } else if (lvl === 14 && money >= price) {
    lvl++;
    money -= price;
    price = 32768000;
  } else {
    if (lvl === 15) {
      document.getElementById("price").innerHTML = null;
      document.getElementById(
        "error"
      ).innerHTML = `Досягнуто максимального рівня`;
    } else {
      alert("Недостатньо коштів");
    }
  }
};

document.getElementById("byEnergy").onclick = function byEnergy() {
  if (money >= 50) {
    energy += 10;
    money -= 50;
  } else {
    alert("Недостатньо коштів");
  }
};
document.getElementById("byEnergy2").onclick = function byEnergy() {
  if (money >= 500) {
    energy += 100;
    money -= 500;
  } else {
    alert("Недостатньо коштів");
  }
};
document.getElementById("byEnergy3").onclick = function byEnergy() {
  if (money >= 5000) {
    energy += 1000;
    money -= 5000;
  } else {
    alert("Недостатньо коштів");
  }
};

// document.getElementById("i").onclick = function () {
//   money += 1000000;
//   document.getElementById("money").innerHTML = money;
// };

document.getElementById("less").onclick = () => {
  chat++;
  if (chat === 1) {
    document.getElementById("im").innerHTML = "Мам дай грошей!?";
    document.getElementById("less").innerHTML = "Далі";
  } else if (chat === 2) {
    document.getElementById("im").innerHTML = "...";
    document.getElementById("mom").innerHTML =
      "Ні! Я тобі вже скільки разів позичала?";
  } else if (chat === 3) {
    document.getElementById("im").innerHTML =
      "Мам, ну будь ласка! Останній раз...";
    document.getElementById("mom").innerHTML = "...";
  } else if (chat === 4) {
    document.getElementById("im").innerHTML = "...";
    document.getElementById("mom").innerHTML = "У-у";
  } else if (chat === 5) {
    document.getElementById("im").innerHTML = "Ти мене більше не любиш?";
    document.getElementById("mom").innerHTML = "...";
  } else if (chat === 6) {
    document.getElementById("im").innerHTML = "...";
    document.getElementById("mom").innerHTML =
      "Ну гаразд не дивись на мене так, добре тримай: ";
  } else if (chat === 7) {
    document.getElementById("im").innerHTML = "Дякую ти найкраща";
    document.getElementById("mom").innerHTML = "...";
    document.getElementById("less").innerHTML = "😎";

    money += 500 * lvl;
    document.getElementById("money").innerHTML = money.toFixed(2);
    // chat = 0;
  }
};

document.getElementById("complete").onclick = () => {
  const kvest = `Клікніть ${number} раз -`;
  document.getElementById("kvestTitle").innerHTML = kvest;

  if (numClick >= number) {
    let num = number;
    number = Math.round(num * 1.6);
    let mone = prizer * 1.1;
    prizer = mone;
    money += Math.round(mone);
    numClick;
    document.getElementById("kvestTitle").innerHTML = kvest;
    document.getElementById("kvestPrize").innerHTML = Math.round(prizer);
    document.getElementById("money").innerHTML = money.toFixed(2);
    document.getElementById("kvestPrize").innerHTML = Math.round(mone);
  } else {
    document.getElementById("money").innerHTML = money.toFixed(2);
    document.getElementById("kvestTitle").innerHTML = `клікнути ${
      number - numClick
    } раз`;
    document.getElementById("kvestPrize").innerHTML = `${Math.round(prizer)}$`;
  }
};
let baseClick = 1;

const baseClicker = () => {
  if (energy >= 1) {
    numClick += baseClick;
    energy -= 1;
    money += baseClick;
  } else {
    alert("Недостатньо енергії");
  }
};
document.getElementById("base").onclick = baseClicker;
document.getElementById("upgrade").onclick = () => {
  if (money >= 10000 && people >= 1) {
    baseClick += 1;
    money -= 10000;
    document.getElementById("baseLvl").innerHTML = baseClick * people;
  } else {
    alert("Недостатньо коштів або немає робітників");
  }
};

let people = 0;
let peopleShahta = 0;
let speedShahta = 1000;

document.getElementById("buyPeopleShahta").onclick = () => {
  if (money >= 10000) {
    if (peopleShahta === 0) {
      money -= 10000;
      peopleShahta++;
      document.getElementById("peopleListShahta").innerHTML = peopleShahta;
      getBox();
    }
  } else alert("Для найму клікера мінімум потрібно 10000$");
};

document.getElementById("buyPeople").onclick = () => {
  if (money >= 2000) {
    if (people !== 10) {
      money -= 2000;
      people++;
    }
  }
};

document.getElementById("buySpeed").onclick = () => {
  if (peopleShahta === 1 && money >= 1000) {
    speedShahta -= 50;
    document.getElementById("speed").innerHTML = speedShahta / 1000;
  }
};

setInterval(function getBox() {
  if (peopleShahta === 1) {
    const result = prizeList[Math.round(Math.random() * 10)];
    if (energy >= 1) {
      // numClick += Infinity;
      // if(money>=50&&energy<=50){
      //   energy+=10
      //   money-=50
      // }
      numClick += lvl;
      energy -= 1;
      document.getElementById("energy").innerHTML = energy;

      function massa() {
        if (result.name === "Залізо") {
          return Math.random() * 10;
        }
        if (result.name === "Алюміній") {
          return Math.random() * 5;
        }
        if (result.name === "Мідь") {
          return Math.random() * 3;
        }
        if (result.name === "Золото") {
          return Math.random() * 2;
        }
      }
      result.massa = massa();
      prize = `${result.name} ${result.massa.toFixed(2)}`;
      if (result.name === "Залізо") {
        metall += Number(result.massa);
        prizeUrl = "img/metall.png";
        document.getElementById("metall").innerHTML = `${metall.toFixed(2)}кг`;
      } else if (result.name === "Алюміній") {
        aluminiy += result.massa;
        prizeUrl = "img/aluminiy.png";
        document.getElementById("aluminiy").innerHTML = `${aluminiy.toFixed(
          2
        )}кг`;
      } else if (result.name === "Мідь") {
        mid += result.massa;
        prizeUrl = "img/mid.png";
        document.getElementById("mid").innerHTML = `${mid.toFixed(2)}кг`;
      } else if (result.name === "Золото") {
        zoloto += result.massa;
        prizeUrl = "img/zoloto.png";
        document.getElementById("zoloto").innerHTML = `${zoloto.toFixed(2)}кг`;
      }
      document.getElementById("result").innerHTML = `${prize}кг`;

      document.getElementById("error").innerHTML = ``;
      document.getElementById("errorE").innerHTML = ``;
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `Помилка недостатньо енергії`;
    }
  }
}, speedShahta);

setInterval(() => {
  if (people >= 1 && energy >= people) {
    money += baseClick * people;
    energy -= people;
  }
  // else{
  //   return
  // }
  reload();
}, 1000);

setInterval(() => {
  reload();
}, 100);
document.addEventListener("keyup", function (event) {
  if (event.code == "Backspace") {
    sell();
  }
});
document.addEventListener("keyup", function (event) {
  if (event.code == "Space") {
    btnClick();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code == "Minus") {
    baseClicker();
  }
});
document.addEventListener("keyup", function (event) {
  if (event.code == "F2") {
    money += 100000;
  }
});
