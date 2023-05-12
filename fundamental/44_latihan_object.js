// membuat object angkot

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (penumpang.length === 0) {
      console.warn("angkot masih kosong");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
    // this.penumpang.pop();
  };
}

var angkot1 = new Angkot("Ferry", ["Problinggo", "Surabaya"], [], 0);
var angkot2 = new Angkot("Agus", ["Probolinggo", "Malang"], [], 0);
