// Exemplo com veotr de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados com um classe
const listaDeUsuarios = [
    {nome: "Ana", Idade: 25},
    {nome: "Maria", Idade: 35},
    {nome: "Joana", Idade: 45}
]

// Percorrendo e exibindo os elementos do vetor
// ForEach é um funçaõ com laço de repetição
console.log("Exibindo todos os usuários do vetor.")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem {usuario.idade} anos.`)
})

// Como os antigos.
console.log("\nExibindo todos os usuários do vetor.")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].Idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.Idade >= 18)
// Use as "{}" caso precise de mais uma linha.
// Nesse caso não precisa, por isso não foi utilizado.
maioridade.forEach ( usuario => 
    console.log(`${usuario.nome} tem ${usuario.Idade} anos.`)
)