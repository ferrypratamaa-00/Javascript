//  DOM Selection
// document.getElementById() -> element

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Ferry Agus";

//document.getElementsByTagName() -> htmlcollection

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// document.getElementsByClassName() -> htmlcollection

const p1 = document.getElementsByClassName("p1");
const p2 = document.getElementsByClassName("p2");
p1[0].innerHTML = "ini diubah dari javascript";
p2[0].innerHTML = "ini juga diubah dari javascript";

// document.querySelector() -> element

const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const li3 = document.querySelector("section#b ul li:nth-child(3)");
li3.style.backgroundColor = "red";

const p5 = document.querySelector('p'); // hanya akan memilih element yang pertama kali ditemukan

// document.querySelectorAll() -> nodelist

const p6 = document.querySelectorAll('p');
for (let i = 0; i < p6.length; i++) {
    p6[i].style.fontSize = '10px';
}

// memanipulasi node root

const sectionB = document.getElementById('b');
const p7 = sectionB.querySelector('p');
p7.style.textDecoration = 'underline';
p7.style.textTransform = 'uppercase';
