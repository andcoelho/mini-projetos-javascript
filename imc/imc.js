

const calcular = document.getElementById('calcular');



function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; //ctrl + D para selecionar peso nos dois campos
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2); //toFixed para arredondar em 02 casas decimais

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        } else if(valorIMC < 25){
            classificacao = 'com peso ideal'
        } else if(valorIMC < 30){
            classificacao = 'você está levemente acima do peso';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau 1';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'com obesidade grau III, cuidado!';
        }

        resultado.textContent =`${nome} seu IMC é ${valorIMC} e você está ${classificacao}` ;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
    
}

calcular.addEventListener('click', imc); //escute o botão calcular, ao ser clicado, execute a função imc



