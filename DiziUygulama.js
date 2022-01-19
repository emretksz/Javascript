var arabaMarkalari=["Bmw","Opel","Mazda"]

console.log("Dizi eleman Sayısı "+arabaMarkalari.length);
console.log("İlk Eleman: "+arabaMarkalari[0]+"\n"+"Son Eleman: "+arabaMarkalari[2])

arabaMarkalari.push ("Renault");
arabaMarkalari.unshift("Toyota");
console.log(arabaMarkalari);
console.log("İlk Eleman Silindi: "+arabaMarkalari.shift()+"\n"+"Son Eleman Silindi: "+arabaMarkalari.pop());
console.log(arabaMarkalari);
arabaMarkalari=["Bmw","Opel","Mazda"];

console.log(arabaMarkalari.reverse());

var value=arabaMarkalari.indexOf("Opel");
console.log(value);
var str="Chevrolet,Dacia";

var diziYap= str.split(',')
console.log(diziYap);
console.log(arabaMarkalari.concat(diziYap));
arabaMarkalari.splice(3,2);
console.log(arabaMarkalari);

var dizim=[studentA = ["Yigit Bilgi 2010"],studentB =["Sena Turan 1999"],studentC =["Ahnet Turan 1998"]];

console.log(dizim);