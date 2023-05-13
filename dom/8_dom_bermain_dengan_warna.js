const btnUbah = document.getElementById("btnUbah");
const body = document.getElementsByTagName("body")[0];
btnUbah.addEventListener("click", function () {
  // body.setAttribute('class', 'light-yellow');
  body.classList.toggle("light-yellow");
});

const btnAcak = document.createElement("button");
const teksBtnAcak = document.createTextNode("Acak Warna");

btnAcak.appendChild(teksBtnAcak);
btnAcak.setAttribute("type", "button");
btnAcak.setAttribute("id", "btnAcakWarna");
btnUbah.after(btnAcak);

btnAcak.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
  body.style.transition = "0.8s";
});

const smerah = document.querySelector("input[name=smerah]");
const shijau = document.querySelector("input[name=shijau]");
const sbiru = document.querySelector("input[name=sbiru]");
smerah.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

shijau.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

sbiru.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  body.style.backgroundColor = "rgb(" + r + ", " + g + "," + b + ")";
});

body.addEventListener('mousemove', function(event){
// posisis mouse
// console.log(event.clientX);
// console.log(event.clientY);

// ukuran browser
// console.log(window.innerWidth);
const xPos = Math.round((event.clientX / window.innerWidth * 255));
const yPos = Math.round((event.clientY / window.innerHeight * 255));
  body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ",100)";
});
