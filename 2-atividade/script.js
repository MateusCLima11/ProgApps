document.getElementById('btnCalcular').addEventListener('click', function() {
    // 1. Pegamos os valores dos dois inputs
    // O comando "Number()" garante que o texto digitado seja lido como número, não como palavra
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);

    // 2. Fazemos os cálculos básicos
    let soma = num1 + num2;
    let produto = num1 * num2;
    let media = soma / 2;

    // 3. Descobrimos quem é o maior e quem é o menor usando if/else (se/senão)
    let maior;
    let menor;

    if (num1 > num2) {
        maior = num1;
        menor = num2;
    } else if (num2 > num1) {
        maior = num2;
        menor = num1;
    } else {
        maior = "Os dois são iguais";
        menor = "Os dois são iguais";
    }

    // 4. Mostramos os resultados na tela
    document.getElementById('resultadoSoma').innerHTML = "Soma: " + soma;
    document.getElementById('resultadoProduto').innerHTML = "Produto: " + produto;
    document.getElementById('resultadoMedia').innerHTML = "Média: " + media;
    document.getElementById('resultadoMaiorMenor').innerHTML = "Maior: " + maior + "<br>Menor: " + menor;
});