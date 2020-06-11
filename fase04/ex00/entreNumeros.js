function por42(num1, num2){
    var multiplo=42;
    while (multiplo < num1){
        multiplo+=42;
    }//variavel 'multiplo' vai sair desse loop valendo o primeiro multiplo de 42 do intervalo
    
    multiplo+=42; //agora, ela vale o proximo multiplo
    
    if(multiplo < num2){
        return multiplo;
    }else{
        console.log("Não encontrado");
        return false;
    }
}
