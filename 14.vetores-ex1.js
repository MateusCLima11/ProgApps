// Exercicios.

// Crie um vetor com nome de seus familiares.
// Com sei nome.

// Use todos os comandos vistos em vetores após criar a lista.

const ListaDeNomes =["Maria", "Marielene", "Davi", "Luiz", "Edson", "Greg"]

console.log("\nExibindo elementos: ")
console.log(listaDeNomes)

console.log("\n Adicionando um elemento: ")
listaDeNomes.push("Mila")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o segundo elemento: ")
listaDeNomes.splice(1, 1)
console,log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)