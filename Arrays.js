

let dizi=[1];

//reverse ters çevirir diziyi
// indexof('') dizide elemenın sırasını verir ve elemanı
///pop başından siler
///shift sonundan siler
//push sonuna  ekleme
//unshift  başına  ekelme

/// sayısal olarka sıralar
// concat  dizi içine dizi eklememzi saglar . dizi.concat(yeniDizi)

//splice();  2. elemandan başla, kaç tane sil, eklenecek veri(2,1,'Emre');
//splice();  (2,1),ikinici elemandan sonra başla ve 2. elemanı siler



function over18(year) {



    let age = 2022-year;
    return age>=18;
}
console.log(over18(1997));
/// dizi'de find kullanımı 
let bul= dizi.find(over18);  /// 18'den büyük ilk sayıyı bulur ve getirir.
console.log(bul);

let bul= dizi.filter(over18);  /// 18'den büyük sayıları  bulur ve DİZİ OLARAK geri getirir. birden fazla 
console.log(bul);