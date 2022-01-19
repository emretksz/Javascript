// kullanıcı bankamatkten para çekecek
//para yeterli mi? yeterli değilse  yedek hesaba bakılacak // eğer yedek hesapla birlikte yeterse para onay verilirse çekilecek.


var hesapA={
    ad: "Emre",
    soyad:"Toksöz",
    anaBakiye:2500,
    yedekBakiye:1000
}


let cekilecekPara=prompt("Çekmek istediğiniz para tutarını giriniz?");
BankaHesabim(cekilecekPara);

function BankaHesabim(istenilenPara) {
    if (istenilenPara>hesapA.anaBakiye) {
     var gelenCevap =prompt("Bakiyeniz Yetersiz. Yedek Bakiyeye bakmak ister misiniz?");
        if (gelenCevap=="Evet") {
            alert("Toplam varlığınız: "+YedekHesap(hesapA.yedekBakiye,hesapA.anaBakiye));
            if (YedekHesap(hesapA.yedekBakiye,hesapA.anaBakiye)>istenilenPara) {
                 gelenCevap =prompt("Çekme İşlemini gerçekleştirelim mi?");
                 if (gelenCevap=="Evet")
                    alert("İşlem tamamlandı!"+"\n"+"Hesabınızda Kalan bakiye: "+(YedekHesap(hesapA.yedekBakiye,hesapA.anaBakiye)-istenilenPara));
                else
                alert("Onay verilmedi,işlem başarısız.");
             }
             else
                 alert("Bakiyeniz Yetersiz");
        }
        else
            alert("İşlem Başarısız"+ "Bakiyeniz Yetersiz");
    }
    else if (istenilenPara=="") 
        alert("Geçerli bir değer girin!");
    else
        alert("İşlem tamamlandı!"+"\n"+"Hesabınızda Kalan bakiye: "+(hesapA.anaBakiye-istenilenPara));
}

function YedekHesap(yedekHesapParasi,bankadakiPara) {
    
    return yedekHesapParasi+bankadakiPara;
}