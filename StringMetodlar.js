const firstName="Emre";
const lastName="Toksöz";

let birlestir;
birlestir= firstName+" "+lastName;
console.log(birlestir);


firstName.indexOf("e"); // eğer ki index olarka aradaığım karakter yoksa sonuç -1 olarak -1 döner.


//substring metodunun farklı kullanımı slice()metodu




var yazi= " Lorem Ipsum, dizgi ve baskı endüstrisinde a-a kullanılan mıgır metinlerdir. ";

console.log(yazi.length);
console.log(yazi.trim().split(" ").length);
console.log(yazi.toLowerCase());
console.log(yazi.trim());
console.log(yazi.replace('-',''));

console.log(yazi.replace(/ /g,'')); // gördüğü bütün boşluklara istediğimizi ekler.

console.log(yazi.includes('Ipsum'));
console.log(yazi.indexOf('Ipsum'));


