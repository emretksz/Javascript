

let random= Math.floor(Math.random(1,10)*10);
let tahmin= prompt();
let sayac=0;

for(let i=0; i<10;i++){

    if (tahmin==random) {
     
        if (sayac<3||sayac==0) {
            console.log("sayıyı buldunuz"+`${sayac}. seferde bildiniz`+"\n"+"skorunuz: "+"*****");
        }
        else if (sayac>3&&sayac<6) {
            console.log("sayıyı buldunuz"+`${sayac}. seferde bildiniz`+"\n"+"skorunuz: "+"***");
        }
      else{
        console.log("sayıyı buldunuz"+`${sayac}. seferde bildiniz`+"\n"+"skorunuz: "+"*");
      }
      break;
    }
    else{
        sayac++;
       tahmin= prompt();

     
    }
    if(i==10){
     alert("Deneme limitiniz doldu kanksss");
    }

}
