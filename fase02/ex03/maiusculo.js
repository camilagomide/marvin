function maiusculo(palavra) {
    var maisc = palavra.substring(0,3).toUpperCase();
    var min= palavra.substring (3);
    return maisc + min; 
}
