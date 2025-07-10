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

let vinA = 0;
let vinB = 0;
let posY = 0;
let posYB = 0;
let arrowAposX = 0;
let arrowBposX = 0;
let healthA = 100;
let healthB = 100;

let user = {
  userName: "User",
  src: "background.png",
  money: 0,
  diamonds: 0,
};

function reload() {
  userNameH.innerHTML = user.userName;
  userImageH.src = user.src;
  moneyH.innerHTML = user.money;
  diamondsH.innerHTML = user.diamonds;

  healthPersonA.value = healthA;
  healthPersonB.value = healthB;

  personA.style.bottom = `${posY}px`;
  personB.style.bottom = `${posYB}px`;

  vins.innerHTML = `${vinA} | ${vinB}`;

  if (healthA <= 0) {
    healthA = 100;
    vinB++;
    posY = 0;
  } else if (healthB <= 0) {
    user.money += 100;
    healthB = 100;
    vinA++;
    posYB = 0;
  }
}
setInterval(reload, 100);

const controls = (value, B) => {
  if (!B) {
    if (value === "up" && posY <= 400) posY += 20;
    if (value === "bottom" && posY >= 20) posY -= 20;
  } else {
    if (value === "up" && posYB <= 400) posYB += 20;
    if (value === "bottom" && posYB >= 20) posYB -= 20;
  }
};

const fireRate = 500; // мс
let lastFireTimeA = 0;
let lastFireTimeB = 0;

const fire = (value) => {
  const now = Date.now();
  if (
    (value === 0 && now - lastFireTimeA < fireRate) ||
    (value === 1 && now - lastFireTimeB < fireRate)
  ) {
    return; // Ще не пройшла затримка
  }

  if (value === 0) lastFireTimeA = now;
  if (value === 1) lastFireTimeB = now;

  // решта твого fire-коду нижче не змінюється...
  const land = document.querySelector(".land");
  const person = value === 1 || value === "megaBombB" ? personB : personA;
  const enemy = value === 1 || value === "megaBombB" ? personA : personB;

  const newArrow = document.createElement("div");
  newArrow.className = "arrow";

  if (value === "megaBombA" || value === "megaBombB") {
    newArrow.style.padding = "20px";
    newArrow.style.borderRadius = "100px";
    newArrow.style.background = "black";
  }

  const personBottom = parseInt(person.style.bottom || "0");
  const personHeight = person.offsetHeight;
  const arrowY = personBottom + personHeight / 2 - 10;

  newArrow.style.position = "absolute";
  newArrow.style.bottom = `${arrowY}px`;
  newArrow.style.width = "20px";
  newArrow.style.height = "10px";
  newArrow.style.background = "black";
  newArrow.style.borderRadius = "5px";
  newArrow.style.display = "block";
  newArrow.style.zIndex = "100";

  let posX = 0;
  let isRight = value === 1 || value === "megaBombB";

  if (isRight) {
    newArrow.style.right = `0px`;
  } else {
    newArrow.style.left = `0px`;
  }

  land.appendChild(newArrow);

  const interval = setInterval(() => {
    posX += value === "megaBombA" || value === "megaBombB" ? 20 : 25;
    if (isRight) {
      newArrow.style.right = `${posX}px`;
    } else {
      newArrow.style.left = `${posX}px`;
    }

    const arrowRect = newArrow.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();

    const hitX =
      arrowRect.left < enemyRect.right && arrowRect.right > enemyRect.left;
    const hitY =
      arrowRect.top < enemyRect.bottom && arrowRect.bottom > enemyRect.top;

    if (hitX && hitY) {
      clearInterval(interval);
      newArrow.remove();

      if (value === 1) healthA -= 20;
      else if (value === "megaBombB") healthA -= 80;
      else if (value === "megaBombA") healthB -= 80;
      else healthB -= 20;
    }

    const landRect = land.getBoundingClientRect();
    if (
      arrowRect.left > landRect.right + 100 ||
      arrowRect.right < landRect.left - 100
    ) {
      clearInterval(interval);
      newArrow.remove();
    }
  }, 16);
};

// // 🔫 === Безперервна стрільба ===
// let isFiringA = false;
// let isFiringB = false;
// const fireRate = 800; // мілісекунд між пострілами (500 = 2 постріли/сек)

function startAutoFire(isB) {
  const loop = () => {
    if ((isB && isFiringB) || (!isB && isFiringA)) {
      fire(isB ? 1 : 0);
      setTimeout(loop, fireRate);
    }
  };
  loop();
}

// 🎮 Обробка клавіш
document.addEventListener("keydown", function (event) {
  if (event.repeat) return;

  if (event.key === "w") controls("up");
  else if (event.key === "s") controls("bottom");
  else if (event.code === "Space") {
    isFiringA = true;
    startAutoFire(false);
  } else if (event.key === "ArrowUp") controls("up", 1);
  else if (event.key === "ArrowDown") controls("bottom", 1);
  else if (event.key === "Enter") {
    isFiringB = true;
    startAutoFire(true);
  }

  if (event.key === "ArrowUp" && event.shiftKey) fire("megaBombB");
  else if (event.code === "KeyW" && event.altKey) fire("megaBombA");
});

document.addEventListener("keyup", function (event) {
  if (event.code === "Space") isFiringA = false;
  if (event.key === "Enter") isFiringB = false;
});
