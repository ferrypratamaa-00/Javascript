/*
1. membuat fungsi tambahPenumpang dan hapusPenumpang
    - tambahPenumpang()
        + namaPenumpang
        + arrayPenumpang

rules :
- penumpang mengisi kursi yang kosong (dari awal)

pseudocode
1. jika penumpang kosong
    - tambahkan diawal array
    - kembalikan isi array dan keluar dari function
2. jika tidak kosong
    - telurusi seluruh kursi dari awal
        + jika ada kursi kosong
            - tambah penumpang dikursi tersebut
            - kembalikan isi array dan keluar dari function
        + jika sudah ada nama yang sama
            - tampilkan pesan warning
            - kembalikan isi array dan keluar dari function
        + jika seluruh kursi terisi
            - tambah penumpang dikursi terakhir
            - kembalikan isi array dan keluar dari function
*/

var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i].toLowerCase() == namaPenumpang.toLowerCase()) {
        console.info(namaPenumpang + " sudah ada didalam angkot !");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.info("Angkot Masih Kosong !");
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i].toLowerCase() == namaPenumpang.toLowerCase()) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
};
console.log(penumpang);
