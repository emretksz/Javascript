let dizim=[
    {firsName:"Emre",lastName:"Toksöz",age:24},
    {firsName:"Özge",lastName:"Toksöz",age:27},
    {firsName:"Gözde",lastName:"Toksöz",age:35}
];
for (var  item in dizim) {
 console.log(`index ${item}`+" "+dizim[item].firsName);  
}


dizim.forEach(function (item) {
    console.log(item.firsName);
});


let valu=dizim.map(function (item) {
    
    return item.firsName+" "+item.age;
});
console.log(valu);