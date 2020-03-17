function tempo(data1, data2,unidade){
var resultado= new Date (data2)- new Date (data1);
if (unidade=== "ano") {
    resultado = (new Date (data2) - new Date (data1))/(1000*60*60*24*30*12);
}
else if (unidade=== "mes") {
    resultado = (new Date (data2)- new Date (data1))/(1000*60*60*24*30);
} 
else if (unidade=== "dia") {
    resultado = (new Date (data2)- new Date (data1))/ (1000*60*60*24);
}
return Math.round(Math.abs(resultado))
}
