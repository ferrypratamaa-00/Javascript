var jmlAngkot = 10,
  angkotBeroperasi = 6,
  angkotLembur = 8,
  noAngkot = 1;

for (let index = noAngkot; index <= jmlAngkot; index++) {

  if (index <= angkotBeroperasi && index !== 5) {
    console.log("Angkot No " + index + " sedang beroperasi dengan baik");
  }else if(index === 8 || index === 10 || index === 5){
    console.log('Angkot No. ' + index + ' sedang lembur');
  }else {
    console.log("Angkot No " + index + " sedang tidak beroperasi");
  }
}
