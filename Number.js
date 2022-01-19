
val=10;

val= 10.21321312;
let x = val.toPrecision(2);// kaç basamaklı sayı istiyorum.
let gelen = val.toFixed(2);// virgülden sonra kaç basamaklı sayı istiyorum.

val=Math.PI;
val= Math.round(2,6); // en yakın sayıya yuvarlar
val= Math.ceil(2,6); //hep yuarkı sayıya yuvarlar
val= Math.floor(2,6); //hep aşağı sayıya yuvarlar
val= Math.sqrt(64); //Karakök hesaplama
val= Math.min(1,2,3,4,6); //dizi döner ve en küçük sayıyı bana verir.
val= Math.max(1,2,3,4,6); //dizi döner ve en büyük sayıyı bana verir.


val= Math.floor(Math.random()*20);/// RANDOM ÜRETİR.
console.log(val);


var sayi1= 13.1231321;
console.log(sayi1.toPrecision(3));
console.log(Math.round(sayi1));
console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));
let min=10;
let max=30;
console.log(Math.floor(min+Math.random()*(max-min)));


let mesai= 42;
let brutMaas=3700;
let mesaiUcreti = 10.3;

let mesaiToplami= (parseFloat(mesai)*parseFloat(mesaiUcreti)
                    +brutMaas).toFixed(2);
console.log(mesaiToplami);
let son = (mesaiToplami-(mesaiToplami*0.25));
console.log("Kesinti Yapılmış Hali: "+((son).toFixed(2)));
