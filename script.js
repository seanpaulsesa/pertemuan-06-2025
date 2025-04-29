// funggsi dalam JavaScript

// penggenalan fungsi
function halo () {
    console.log("Hello World!");
}

halo(); // panggil fungsi halo

// fungsi dengan parameter dan return
function penjumlahan(a, b) {

   return a + b 
}

let hasil = penjumlahan(5, 10); // panggil fungsi penjumlahan
console.log(hasil); // cetak hasil penjumlahan
penjumlahan();




// 3 function expression

const perkali = function (a, b) {
    return a * b;
}
console.log(perkali(5, 10)); // panggil fungsi perkali


// 4 function arrow
const pengurangan = (a, b) => a - b 
console.log(pengurangan(10, 5)); // panggil fungsi pengurangan



// menampilkan data di browser/ dokumen html

document.write("<h1>Selamat datang di JavaScript</h1>");
document.write("<hr> Hasil penjumlahan: " + hasil);

document.write("<hr> Hasil perkalian: " + perkali(5, 10));
document.write("<hr> Hasil pengurangan: " + pengurangan(10, 5));


document.write("<hr> hasil pengurangan: " + pengurangan(10, 5));
document.write("<hr> hasil penjumlahan: " + penjumlahan(5, 10));    