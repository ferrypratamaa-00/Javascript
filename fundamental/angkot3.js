var jmlAngkot = 10,
  angkotBeroperasi = 6,
  noAngkot = 1;

  for (let index = noAngkot; index <= jmlAngkot; index++) {
    
    if(index <= angkotBeroperasi){
        console.log('Angkot No ' + index + ' sedang beroperasi dengan baik');
    }else{
        console.log('Angkot No ' + index + ' sedang tidak beroperasi');
    }
    
  }