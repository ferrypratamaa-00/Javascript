const gajah = document.querySelector(".gajah");
const orang = document.querySelector(".orang");
const semut = document.querySelector(".semut");
const info = document.querySelector(".info");

const quesComp = document.querySelector(".area-komputer .question-comp");
const quesOrang = document.querySelector(".area-komputer .question-human");

gajah.addEventListener("click", function () {
  if (pilihanComputer() == "gajah") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/gajah.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/gajah.png");

    info.innerHTML = "Seri!";
  } else if (pilihanComputer() == "semut") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/semut.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/gajah.png");

    info.innerHTML = "Kalah!";
  } else {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/orang.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/gajah.png");

    info.innerHTML = "Menang!";
  }
});


orang.addEventListener("click", function () {
  if (pilihanComputer() == "orang") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/orang.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/orang.png");

    info.innerHTML = "Seri!";
  } else if (pilihanComputer() == "gajah") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/gajah.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/orang.png");

    info.innerHTML = "Kalah!";
  } else {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/semut.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/orang.png");

    info.innerHTML = "Menang!";
  }
});


semut.addEventListener("click", function () {
  if (pilihanComputer() == "semut") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/semut.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/semut.png");

    info.innerHTML = "Seri!";
  } else if (pilihanComputer() == "orang") {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/orang.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/semut.png");

    info.innerHTML = "Kalah!";
  } else {
    quesComp.removeAttribute("src");
    quesComp.setAttribute("src", "img/gajah.png");

    quesOrang.removeAttribute("src");
    quesOrang.setAttribute("src", "img/semut.png");

    info.innerHTML = "Menang!";
  }
});

function pilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
}
