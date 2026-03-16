function gerarTabuada() {
    // Obtendo o número do input no HTML.
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    // Elemento do HTML onde o rsultado será executado.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um número válido.
    if (isNaN(numero) || numero === null || numero === "") {
        resultadoDiv.innerHTML= "<p>Por favor, digite um número válido.</p>"
        return; // Este comando sai da função.
    }

    // Adcionar título para a tabuada .
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // Laço de repetição para gerar tabuada.
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada);