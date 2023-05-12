var jmlAngkot = 10,
  angkotBeroperasi = 6,
  noAngkot = 1;

  while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik');
    noAngkot++;
  }
  for (let index = angkotBeroperasi+1; index <= jmlAngkot; index++) {
    console.log('Angkot No. '+ index + ' tidak sedang beroperasi');
    
  }