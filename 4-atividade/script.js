// O nome aqui tem que ser exatamente igual ao ID do botão no HTML
document.getElementById('btnCalcularMedia').addEventListener('click', function() {
    
    // 1. Pega os valores digitados nos três campos e converte para número
    let num1 = Number(document.getElementById('nota1').value.replace(',', '.'));
    let num2 = Number(document.getElementById('nota2').value.replace(',', '.'));
    let num3 = Number(document.getElementById('nota3').value.replace(',', '.'));

    // 2. Calcula a média matemática
    let media = (num1 + num2 + num3) / 3;

    // 3. Prepara uma variável vazia para guardar o texto final
    let mensagem = "";

    // 4. Faz a verificação (Maior ou igual a 7 = Aprovado. Menor que 7 = Reprovado)
    if (media > 6.9) {
        // O .toFixed(1) arredonda a nota para ter só uma casa decimal (Ex: 7.5)
        mensagem = "PARABÉNS! VOCÊ FOI APROVADO COM NOTA: " + media.toFixed(1);
    } else {
        mensagem = "REPROVADO COM NOTA: " + media.toFixed(1);
    }

    // 5. Injeta a mensagem final dentro da div "resultadoMedia" no HTML
    document.getElementById('resultadoMedia').innerHTML = "<strong>" + mensagem + "</strong>";
});