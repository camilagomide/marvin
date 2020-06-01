function por42(num1, num2){
    var numero= 42;
    var multiplica= 1; 
    var achou= true; 
while(achou){
    var resultado= numero * multiplica; 
    if (resultado >= num1 & resultado <= num2) {
        multiplica ++;
     resultado=numero+multiplica;
        achou=false
    }
    else {
        if (resultado > num2) {
            achou= false
            resultado= "Não encontrado";
        }
    else {
    multiplica ++
    }
}
}
}
