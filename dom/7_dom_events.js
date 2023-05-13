var p3 = document.querySelector(".p3");
function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const arrayUl = document.querySelectorAll("section#b ul li");
  let panjangLi = arrayUl.length;
  panjangLi = panjangLi + 1;
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("item " + panjangLi);
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

// events handler akan menimpa event sebelumnya
var p1 = document.querySelector(".p1");
// p1.onclick = function(){
//     p1.style.backgroundColor = 'lightgreen';
// }
// p1.onclick = function(){
//     p1.style.color = 'lightgreen';
// }

p1.addEventListener('mouseenter', function(){
    p1.style.backgroundColor = 'lightgreen';
})
p1.addEventListener('mouseleave', function(){
    p1.style.backgroundColor = "white";
})
