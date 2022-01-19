
// let d= new Date();
// // Get methodlar

// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());

// //set methodlar

// d.setFullYear(2020);
// d.setDate(11);
// d.setMonth(1);
// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());


let tarih = new Date();

console.log(tarih.getFullYear());
let a= new Date();

console.log("Tarih :"+a.getDate()+" "+"Saat :"+a.getSeconds() );
let tarih1 = new Date(1990,1,01);

console.log(tarih1.getFullYear()-1);


let tarih3 = new Date(2021,2,20);


console.log("Geçen Yıl "+
tarih.getFullYear()-tarih3.getFullYear());


var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2022);
annelerGunu.setMonth(4);
annelerGunu.setDate(1);


while (annelerGunu.getDay()!=0) {
    
    annelerGunu.setDate(annelerGunu.getDate()+1)
}

annelerGunu.setDate(annelerGunu.getDate()+7);
    console.log(annelerGunu);



