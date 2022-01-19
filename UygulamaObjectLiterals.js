

//araç bilgileri 


let models= [
{
    id:"Bwm116",
    model:"116d",
    yil:2022,
    renk:"Kırmızı",
    servisKayitlar:[
        {
        id:"Bwm116",
        tarih:"30.01.2022",
        km:"1000",
        toplamUcret:2000,
        servisDetaylari:[
            {
            id:1,
            islem:"Yağ Değişim",
            ucret:300
             },
              {
            id:2,
            islem:"Filtre Değişimi",
            ucret:200
             },
             {
            id:3,
            islem:"Fren Hidroloği",
            ucret:400
             }]
    },

]
},
{
    id:"A3",
    model:"Audi",
    yil:2012,
    renk:"Gri",
    servisKayitlar:[{
        id:"A3",
        tarih:"30.01.2012",
        km:"150000",
        toplamUcret:30000,
    
        servisDetaylari:[{
            id:1,
            islem:"Yağ Değişim",
            ucret:320
        },
        {
            id:2,
            islem:"Filtre Değişimi",
            ucret:150
        },
        {
            id:3,
            islem:"Fren Hidroloği",
            ucret:500
        }]
    }]
}
];

var modelim=models.find(u=>u.id=="A3");
console.log(modelim.id+" "+modelim.servisKayitlar[0].servisDetaylari[0].islem+modelim.servisKayitlar[0].servisDetaylari[0].ucret);
console.log(models[0]);



