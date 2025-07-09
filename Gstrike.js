const moneyH = document.getElementById("money");
const diamondsH = document.getElementById("diamonds");
const userNameH = document.getElementById("userName");
const userImageH = document.getElementById("userImage");

const personA = document.getElementById("personA");
const personB = document.getElementById("personB");
const arrowA = document.getElementById("arrowA");
const arrowB = document.getElementById("arrowB");
const healthPersonA = document.getElementById("healthA");
const healthPersonB = document.getElementById("healthB");

const vins = document.getElementById("vins");

function reload() {
  userNameH.innerHTML = user.userName;
  userImageH.src = user.src;
  moneyH.innerHTML = user.money;
  diamondsH.innerHTML = user.diamonds;

  healthPersonA.value = healthA;
  healthPersonB.value = healthB;

  vins.innerHTML = `${vinA} | ${vinB}`;

  if (healthA <= 0) {
    alert("червоний виграв");
    healthA = 100;
    vinB++;
  } else if (healthB <= 0) {
    user.money += 100;

    alert("зелений виграв");
    healthB = 100;
    vinA++;
  }
}

let vinA = 0;
let vinB = 0;
let posY = 0;
let posYB = 250;

let arrowAposX = 0;
let arrowAposY = 0;

let arrowBposX = 0;
let arrowBposY = 0;

let healthA = 100;
let healthB = 100;

const controls = (value, B) => {
  if (!B) {
    if (value === "up" && posY <= 400) {
      posY += 20;
    }
    if (value === "bottom" && posY >= 20) {
      posY -= 20;
    }
    arrowAposY = posY; // ОНОВЛЕННЯ після зміни
  } else {
    if (value === "up" && posYB <= 400) {
      posYB += 20;
    }
    if (value === "bottom" && posYB >= 20) {
      posYB -= 20;
    }
    arrowBposY = posYB; // ОНОВЛЕННЯ після зміни
  }

  personA.style.bottom = `${posY}px`;
  personB.style.bottom = `${posYB}px`;
};
const fire = (value) => {
  const arrow = value ? arrowB : arrowA;
  const person = value ? personB : personA;
  const enemy = value ? personA : personB;
  const land = document.querySelector(".land");

  // Зупинити попередній інтервал, якщо був
  if (arrow.fireInterval) {
    clearInterval(arrow.fireInterval);
    arrow.fireInterval = null;
  }

  // ➕ Розрахунок точної позиції по центру персонажа
  const personBottom = parseInt(person.style.bottom || "0");
  const personHeight = person.offsetHeight;
  const arrowY = personBottom + personHeight / 2 - 10; // -10 щоб стріла була по центру

  // Початкові координати стріли
  if (!value) {
    arrowAposX = 0;
    arrow.style.left = `0px`;
    arrow.style.bottom = `${arrowY}px`;
  } else {
    arrowBposX = 0;
    arrow.style.right = `0px`;
    arrow.style.bottom = `${arrowY}px`;
  }

  arrow.style.display = "block";

  // 🔁 Рух стріли
  const interval = setInterval(() => {
    if (!value) {
      arrowAposX += 25;
      arrow.style.left = `${arrowAposX}px`;
    } else {
      arrowBposX += 25;
      arrow.style.right = `${arrowBposX}px`;
    }

    // ➕ Перевірка попадання за допомогою getBoundingClientRect
    const arrowRect = arrow.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();

    const hitX =
      arrowRect.left >= enemyRect.left && arrowRect.right <= enemyRect.right;
    const hitY =
      arrowRect.top >= enemyRect.top && arrowRect.bottom <= enemyRect.bottom;

    if (hitX && hitY) {
      clearInterval(interval);
      arrow.style.display = "none"; // ❗ зникає при попаданні
      arrow.fireInterval = null;

      return value ? (healthA -= 20) : (healthB -= 20); /// попадання
    }

    // ➕ Якщо вилетіла за межі
    const landRect = land.getBoundingClientRect();
    if (
      arrowRect.left > landRect.right + 100 ||
      arrowRect.right < landRect.left - 100
    ) {
      clearInterval(interval);
      arrow.style.display = "none";
      if (!value) arrowAposX = 0;
      else arrowBposX = 0;
      arrow.fireInterval = null;
    }
  }, 16);

  // Зберігаємо інтервал, щоб зупиняти при наступному пострілі
  arrow.fireInterval = interval;
};

setInterval(reload, 100);

let user = {
  userName: "User",
  src: "background.png",
  money: 0,
  diamonds: 0,
};
document.addEventListener("keydown", function (event) {
  console.log("click");
  if (event.key === "w") {
    controls("up");
  } else if (event.key === "s") {
    controls("bottom");
  } else if (event.code === "Space") {
    fire();
  } else if (event.key === "ArrowUp") {
    controls("up", 1);
  } else if (event.key === "ArrowDown") {
    controls("bottom", 1);
  } else if (event.key === "Enter") {
    fire(1);
  }
});
