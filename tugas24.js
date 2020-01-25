function deretAngka() {
    var angka0 = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("Sebelumnya : ", angka0.toString());
    
    var angka1 = angka0.sort();
    console.log("Ascending : ", angka1.toString());

    var angka2 = angka0.reverse();
    console.log("Descending : ", angka2.toString());
}
deretAngka();
