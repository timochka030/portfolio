const moneyH = document.getElementById("money");
const diamondsH = document.getElementById("diamonds");
const userNameH = document.getElementById("userName");
const userImageH = document.getElementById("userImage");

const personA = document.getElementById("personA");
const personB = document.getElementById("personB");

function reload() {
  userNameH.innerHTML = user.userName;
  userImageH.src = user.src;
  moneyH.innerHTML = user.money;
  diamondsH.innerHTML = user.diamonds;
}
let posY = 0;
let posYB = 0;
const controls = (value, B) => {
  if (!B) {
    if (value === "up" && posY <= 400) {
      posY += 20;
    }
    if (value === "bottom" && posY >= 20) {
      posY -= 20;
    }
  } else {
    if (value === "up" && posYB <= 400) {
      posYB += 20;
    }
    if (value === "bottom" && posYB >= 20) {
      posYB -= 20;
    }
  }
  personA.style.bottom = `${posY}px`;
  personB.style.bottom = `${posYB}px`;
};

const fire = (value) => {
  if (!value) {
  }
};

let user = {
  userName: "User",
  src: "background.png",
  money: 0,
  diamonds: 0,
};

reload();
