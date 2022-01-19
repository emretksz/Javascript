
// console.log("aMerhaba");
// console.error("Hata");
// console.info("Dene");
// console.log([1,2,3]);


///Değişkenler

// var age;  // değişkene bir atama yapılmazsa undifined olarka karşımıza gelir.
// console.log(age); 
// age= 25;
// console.log(age);
// age="asa";
// console.log(age);


                        // Değişken Tipleri

//Primitive Type
// string
//number
//Boolean
//null

let firstName="";
console.log(typeof firstName); /// veri tipini görebiliriz.

null // tipli bir değişen primitiv tipli bir değişkendir.



/// reference Types-Objects  

let names=['Emre','Toksöz'];  //->> dizi bir object tipdir
console.log(typeof names);

let address={  //Dizi içindeki atamalar : ile

    city:"antalya",
    postaKodu:0000,
    nufus:123456,
    Country:'Türkiye'

};

console.log(typeof address);
 
//function
var yas= function () {

    return 0;
};

console.log(typeof yas);


// Tür Dönüşümü

let num1='5';

console.log(Number(num1)) // sayısal tipe çevirme

let yazi=10;
console.log(String(yazi)); //string convert

let val= true;
console.log(String(val)); //Boolean convert to string

val= String(new Date()/*.getFullYear()*/);
console.log(val);
console.log( typeof Date(val));

val = (["1","2","3"]);
console.log(val);
console.log( typeof (val));


//Number dönüşümde null=0 false =0 true=1  olarka karşımıza çıkar

//parsInt
val=parseInt("10"); //düz sayılar
val=parseFloat("10.5");//ondalıklı sayılar