// Exemplo com veotr de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados com um classe
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
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
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as "{}" caso precise de mais uma linha.
// Nesse caso não precisa, por isso não foi utilizado.
maioridade.forEach ( usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)


console.log("\nNa lista de usuários mostre apenas os nomes.")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuários encontre um usuário.")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nNa lista de usuários encontre um usuário com 45 anos.")
const usuario = listaDeUsuarios.find(u => u.idade === 45)
console.log(`Nome: ${usuario.nome} \nIdade: ${usuario.idade}`)


