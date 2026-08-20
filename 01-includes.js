//1. includes() - "Temesse item?"
//Responde à pergunta: "Existe?" (retorna true ou false)

console.log("=== 1. includes() ===");

//Exemplo 1 - Lista de frutas
const frutas = ["Maça", "Banana", "Laranja"];

console.log("Tem Banana?", frutas.includes("Banana")); //true (porque Banana está no array)
console.log("Tem Uva", frutas.includes("Uva"));        //false (porque Uva não está no array)

//Exemplo 2 - Usando if/else
if (frutas.includes("Banana")) {
    console.log("Tem Banana!");
} else {
    console.log("Não tem Banana!");
}

//Exemplo 3 - Lista de alunos
const alunos = ["Ana", "João", "Carlos"];
const nome = "João"

if (alunos.includes(nome)) {
    console.log("Aluno encontrado!");
} else {
    console.log("Aluno não encontrado");
}


