function mostrarData(){
    event.preventDefault();
    const dia1 = document.getElementById("dia");
    const mes1 = document.getElementById("mes");
    const ano1 = document.getElementById("ano");
    const dia = dia1.value;
    const mes = mes1.value;
    const ano = ano1.value;
    let validar = 1;

    const diaL = document.getElementById("diaL")

    if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        if(dia <= 31){
            validar = 1
        }else{
            validar = 2
        }
    }
    if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        if(dia <= 30){
            validar = 1
        }else{
            validar = 2
        }
    }
    if(mes == 2){
        if((ano%400 == 0) || (ano%4==0 && ano%100!=0)){
            if (dia <= 29){
                validar = 1
            }else{
                validar = 2
            }
        }else{
            if (dia <= 28){
                validar = 1
            }else{
                validar = 2
            }
        }
    }
    if (ano < 100){
        validar = 2
    }
    
    if (validar == 1){
    const data1 = ano + "-" + mes + "-" + dia;
    const datahoje = new Date();
    const dif = new Date(datahoje) - new Date(data1) ;
    const datafinal = new Date(dif);

    let anofinal = datafinal.getFullYear() - 1970;
    let mesfinal = datafinal.getMonth();
    let diafinal = datafinal.getDate();
    const diafinal1 = datahoje.getDate();
    const mesfinal1 = datahoje.getMonth() + 1;
    if(dia == diafinal1 && mes == mesfinal1) {
        diafinal = 0;
        mesfinal = 0;
        anofinal = anofinal + 1;
    }
    else if (dia <= diafinal1){
        diafinal = diafinal - 1;
    }

    exibir(diafinal, mesfinal, anofinal);
    document.getElementById("anosF").innerHTML = anofinal;
    document.getElementById("mesesF").innerHTML = mesfinal;
    document.getElementById("diasF").innerHTML = diafinal;

}else{
    alert('Data Inválida');
}
} 

function exibir(dia, mes, ano){
    let diafinal = 0;
    let mesfinal = 0;
    let anofinal = 0;


    for(let i = 0; i <= ano; i++){
        document.getElementById("anosF").innerHTML = anofinal;
        setTimeout(0.5);
    }
    for(let i = 0; i <= mes; i++){
        document.getElementById("mesesF").innerHTML = mesfinal;
        setTimeout(0.5);
    }
    for(let i = 0; i <= dia; i++){
        document.getElementById("diasF").innerHTML = diafinal;
        setTimeout(0.5);
    }
}