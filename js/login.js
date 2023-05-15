function validaFormularioCompleto(inputUser, inputPass, selCentroCusto){
    if(inputUser.value != "" && inputPass.value != "" && selCentroCusto.value != "0") return true; 
    else 
    return false;
}