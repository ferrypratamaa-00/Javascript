// // buat element baru
// const pBaru = document.createElement('p');
// const teksBaru = document.createTextNode('Paragraf Baru');

// //simpan tulisan kedalam paragraf
// pBaru.appendChild(teksBaru);

// // simpan pBaru diakhir section A

// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode('Item Baru');

// liBaru.appendChild(textLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2= document.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!');

// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';

const judul = document.getElementById("header");
const judulLama = judul.querySelector("h1");
const judulBaru = document.createElement("h2");
const textJudulBaru = document.createTextNode("Judul Baru");

judulBaru.appendChild(textJudulBaru);
judul.replaceChild(judulBaru, judulLama);

const sectionA = document.getElementById("a");
const link = sectionA.querySelector("a");
sectionA.removeChild(link);

const pBaru = document.createElement("p");
const textBaru = document.createTextNode("Paragraf 3");
pBaru.appendChild(textBaru);
const pSelected = sectionA.querySelector("p:nth-child(3)");
sectionA.insertBefore(pBaru, pSelected);

const p4 = sectionA.querySelector("p:nth-child(4)");
p4.innerHTML = "Paragraf 4";
const banyakP = sectionA.querySelectorAll("p");

for (let i = 0; i < banyakP.length; i++) {
  if (i % 2 == 0) {
    banyakP[i].style.backgroundColor = "lightgreen";
  }
}

