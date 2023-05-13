const judul = document.getElementById('judul');
judul.innerHTML = 'Ferry Agus';


const sectionA =document.querySelector('section#a');
sectionA.innerHTML =
  '<div><p>paragraf 1</p><a href="http://instagram.com/sandhikagalih">Instagram Sandhika Galih</a></div>';

judul.style.backgroundColor = 'red';

const title = document.getElementsByTagName('h1')[0];
title.setAttribute('title', 'hello world');
const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');
console.log(a.getAttribute('href'));
console.log(a.getAttribute('id'));
a.removeAttribute('href');


// menambahkan kelas baru (manipulasi kelas)
const p2 = document.querySelector('#a div');
// menambahkan kelas
p2.classList.add('label');
p2.classList.add('label1');
p2.classList.add('label2');
// menghapus kelas
p2.classList.remove('label1');
// menambahkan jika tidak ada, menghapus jika sudah ada
p2.classList.toggle('label1');
p2.classList.toggle('label2');

document.body.classList.toggle('biru-muda');

// mengetahui nama kelas pada sebuah element
console.log(p2.classList.item(1));

// melihat apakah kelas tersebut ada pada element
console.log(p2.classList.contains('label'));
console.log(p2.classList.contains('label2'));

// menimpa kelas pada sebuah element
p2.classList.replace('label', 'label-baru');