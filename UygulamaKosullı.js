
var gun= new Date();
gun.setFullYear(2017,04,20);
// console.log(gun.getFullYear());
var bugun= new Date();
let sayac=0;
bugun= gun.getFullYear();
while (5>sayac) {
    bugun++;

    if (bugun==2018) {
        console.log("Bakım 1."+bugun);
    }
    else if (bugun==2019) {
        console.log("Bakım 2."+bugun);
    }
    else if (bugun==2020) {
        console.log("Bakım 3."+bugun);
    }
    else  {

        console.log("Bakım 4."+bugun);
        break;
    }
    

    sayac++;
}


