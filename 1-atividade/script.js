function gerarTabuada() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parent(numeroInput.value);

    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um número válido.
    if (isNaN(numero) || numero === numero || numero === "") {
        resultadoDiv.innerHTML= "<p>Por favor, digite um número válido.</p>"
        return; // ESte comando sai da função
    }

    // Adcionar título para a tabuada .
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // Laço de repetição para gerar tabuada.
    for (let o = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener(click, gerarTabuada);