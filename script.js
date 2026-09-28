//Atividade - introdução ao JavaScript - 28/09/2026

//-Exercício 1: Crie variáveis para armazenar seu nome, idade, cidade e profissão. Em seguida, exiba essas informações no console.

const pessoa = "Arthur";
const idade = 19;
const cidade = "São Paulo";
const profissao = "Jovem Aprendiz em gerenciamento de projetos";

console.log(pessoa);
console.log(idade);
console.log(cidade);
console.log(profissao);

console.log(`Meu nome é ${pessoa}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao} no Google.`)

//-Exercício 2: Crie uma função que receba dois números como parâmetros e retorne a soma deles. Em seguida, chame a função e exiba o resultado no console.

function somarNumeros(num1, num2){
    return num1 + num2;
}

const resultado = somarNumeros(5, 10);
console.log(`A soma dos números é: ${resultado}`);

//-Exercício 3: Crie um programa que receba uma idade em anos e mostre aproximadamente quantos meses essa pessoa já viveu.

const idadeAnos = 19;
const mesesVividos = idadeAnos * 12;
console.log(`Essa pessoa já viveu aproximadamente ${mesesVividos} meses.`);

//-Exercício 4: Crie um programa que armazene três notas de um aluno, calcule a média e exiba o resultado.

const nota1 = 8;
const nota2 = 7;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;
console.log(`A média do aluno é: ${media.toFixed(1)}`);

//-Exercício 5: Crie um programa que informe se uma pessoa é maior ou menor de idade a partir da idade informada.

if (idade >= 18) {
    console.log("Maior de idade.");
}else{
    console.log("Menor de idade.");
}
console.log(`A pessoa é Maior de idade!`);

//-Exercício 6: (Número positivo, negativo ou zero) Crie um programa que analise um número e informe se ele é positivo, negativo ou igual a zero.

const numero = -5;

if(numero > 0){
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//-Exercício 7: (Par ou ímpar) Crie um programa que verifique se um número é par ou ímpar.

const numeroParImpar = 7;

if (numeroParImpar % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

//-Exercício 8: (Situação do aluno) Crie um programa que receba a média de um aluno e informe se ele está aprovado, em recuperação ou reprovado. - Considere:

// - aprovado: média maior ou igual a 7;
// - recuperação: média entre 5 e 6,9;
// - reprovado: média menor que 5.

if (media >= 7){
console.log("Aprovado")
}else if (media >= 5){
console.log("Recuperação")
}else {
console.log("Reprovado")
}

//-Exercício 9: (Maior entre dois números) Crie um programa que compare dois números e informe qual deles é o maior. Caso sejam iguais, informe isso ao usuário.

const numero1 = 10;
const numero2 = 15;

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que o número ${numero2}.`);
} else if (numero1 < numero2) {
    console.log(`O número ${numero2} é maior que o número ${numero1}.`);
} else {
    console.log(`Os números ${numero1} e ${numero2} são iguais.`);
}

//-Exercício 10: (Maior entre três números) Crie um programa que compare três números e informe qual deles é o maior.

const num1 = 10;
const num2 = 20;
const num3 = 15; 

if (num1 > num2 && num1 > num3) {
    console.log(`O número ${num1} é o maior entre os três.`);
}   else if (num2 > num1 && num2 > num3) {
    console.log(`O número ${num2} é o maior entre os três.`);
}   else if (num3 > num1 && num3 > num2) {
    console.log(`O número ${num3} é o maior entre os três.`);
}

//-Exercício 11: (Cálculo de desconto) Crie um programa que armazene o preço de um produto. Caso o preço seja maior que R$ 100, aplique um desconto de 10%. Ao final, exiba o valor original e o valor final.

const precoProduto = 100;
const desconto = precoProduto * 0.10;
const precoFinal = precoProduto - desconto;

if (precoProduto >= 100){
console.log(`O preço original do produto é R$ ${precoProduto.toFixed(2)}. Com o desconto de 10%, o preço final é R$ ${precoFinal.toFixed(2)}.`);
}else if (precoProduto < 100)  {
console.log(`O preço do produto é R$ ${precoProduto.toFixed(2)}. Não há desconto aplicado.`);
}

//-Exercício 12: (Controle de acesso) Crie um programa que verifique se uma pessoa pode acessar determinada área. O acesso só deve ser permitido para pessoas maiores de idade que estejam autorizadas.

const idadeAcesso = 18;
const autorizacao = true;

if(idadeAcesso >= 18 && autorizacao === true){
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}
console.log(`A pessoa tem ${idadeAcesso} anos e está autorizada a acessar a área.`);

//-Execício 13: (Lista de nomes) Crie uma lista contendo pelo menos cinco nomes e exiba todos os nomes no console.

const nomes = ["Arthur", "Eric", "Caio", "LucasJogador", "Bigode", "Bruno", "Bruninho", "Luccas"];
for (let cont = 0; cont < nomes.length; cont++){
console.log(nomes[cont]);
}

//-Exercício 14: (Lista de compras) Crie uma lista de compras com pelo menos cinco produtos. Exiba a quantidade total de itens e todos os produtos cadastrados.

const listaCompras = ["Arroz", "Feijão", "Macarrão", "Leite", "Pão", "Ovos", "Frutas", "Verduras", "Carnes", "Bebidas"];
for (let cont = 0; cont < listaCompras.length; cont++){
    console.log(listaCompras[cont]);
}
console.log(`Quantidade total de itens: ${listaCompras.length}`);

//-Exercício 15: (Cadastro de pessoa) Crie uma estrutura que represente uma pessoa contendo nome, idade, cidade e profissão. Exiba todas as informações dessa pessoa no console.

const pessoa1 = {
    nome : "Arthur",
    idade : 19,
    cidade : "São Paulo",
    profissao : "Jovem Aprendiz em gerenciamento de projetos"
}

console.log(`a pessoa se chama ${pessoa1.nome}, tem ${pessoa1.idade} anos, mora em ${pessoa1.cidade} e trabalha como ${pessoa1.profissao}.`);

//-Exercício 16: (Cadastro de produto) Crie uma estrutura que represente um produto contendo nome, preço, categoria e disponibilidade. Exiba uma frase apresentando todas as informações do produto.)

const produto = {
    nome : "Placa de vídeo RX 580",
    preço : 800,
    categoria : "Eletrônicos",
    disponibilidade : true
}
console.log(`O produto é uma ${produto.nome}, custa R$ ${produto.preço.toFixed(2)}, pertence à categoria ${produto.categoria} e está ${produto.disponibilidade ? 'disponível' : 'indisponível'}.`);

//-Exercício 17: (Cadastro de alunos) Crie uma lista com pelo menos três alunos. Cada aluno deve possuir nome e idade. Exiba os dados de todos os alunos no console.

const alunos = [
    { nome: "Arthur", idade: 19 },
    { nome: "Eric", idade: 20 },
    { nome: "Caio", idade: 21 }
];

for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i].nome}, Idade: ${alunos[i].idade}`);
}

//Exercício 18: (Dobro do numero) Crie um programa que receba um número e devolva o dobro desse valor. Teste com diferentes números.
const numeroDobro = 5; 
const dobro = numeroDobro * 2;
console.log(`O dobro do número ${numeroDobro} é ${dobro}.`);

//Exercício 19: (Calculadora de soma) Crie um programa que receba dois números e devolva a soma entre eles. Faça pelo menos três testes diferentes.

const numeroSoma1 = 10;
const numeroSoma2 = 15;
const soma = numeroSoma1 + numeroSoma2;
console.log(`A soma de ${numeroSoma1} e ${numeroSoma2} é ${soma}.`);

//Exercício 20: (Calculadora de média) Crie um programa que receba duas notas e devolva a média entre elas. Faça testes com valores diferentes.
const notaMedia1 = 9;
const notaMedia2 = 4;
const mediaNotas = (notaMedia1 + notaMedia2) / 2;
console.log(`A média entre as notas ${notaMedia1} e ${notaMedia2} é ${mediaNotas.toFixed(1)}.`);

//Exercício 21: (Saudação personalizada) Crie um programa que receba o nome de uma pessoa e exiba uma mensagem de boas-vindas personalizada.

const nomeSaudacao = "Arthur";
console.log(`Bem-vindo, ${nomeSaudacao}! É um prazer tê-lo aqui.`);

//Exercício 22: (Tabuada) Crie um programa que exiba a tabuada completa de um número de 1 até 10.

const numeroTabuada = 1;
for (let i = 1; i <= 10; i++) {
    const resultadoTabuada = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultadoTabuada}`);
}

//Exercício 23: (Contagem crescente) Crie um programa que exiba os números de 1 a 20.

for (let i = 1; i <= 20; i++)
{
    console.log(i);
}

//Exercício 24: (Contagem regressiva) Crie um programa que exiba uma contagem regressiva de 10 até 0 e, ao final, mostre a mensagem "Fim da contagem!".

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Fim da contagem!");

//Exercício 25: (Números pares) Crie um programa que exiba todos os números pares de 1 a 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) 
    console.log(i);
    }
console.log("Esses são todos os números pares de 1 a 50.");

//Exercício 26: (Soma de uma lista) Crie uma lista contendo cinco números e calcule a soma de todos eles.

const listaNumeros = [5, 10, 15, 20, 25];
let somaLista = 0;
for (let i = 0; i < listaNumeros.length; i++) {
    somaLista += listaNumeros[i];
}
console.log(`A soma de todos os números da lista é: ${somaLista}.`);

//Exercício 27: (Média de uma lista) Crie uma lista contendo cinco números e calcule a média entre eles.

const listaNumerosMedia = [5, 10, 15, 20, 25];
let somaListaMedia = 0;
for (let i = 0; i < listaNumerosMedia.length; i++) {
    somaListaMedia += listaNumerosMedia[i];
}   
console.log(`A média dos números da lista é: ${(somaListaMedia / listaNumerosMedia.length).toFixed(1)}.`);

//Exercício 28: (Verificação de presença) Crie um programa que represente um produto com nome, preço e quantidade em estoque. Informe se o produto está disponível ou indisponível.
const produtoEstoque = {
 
    nome: "Placa de vídeo RX 580",
    preco: 800,
    quantidadeEstoque: 5
};

    if (produtoEstoque.quantidadeEstoque > 0) {
        console.log(`O produto ${produtoEstoque.nome} está disponível em estoque.`);
    }   
    else {
        console.log(`O produto ${produtoEstoque.nome} está indisponível em estoque.`);
    }

console.log(`O produto ${produtoEstoque.nome} custa R$ ${produtoEstoque.preco.toFixed(2)} e possui ${produtoEstoque.quantidadeEstoque} unidades em estoque.`);

//Exercício 29: (Boletim completo) Crie um programa que armazene o nome de um aluno e duas notas. Calcule a média e exiba o nome, a média e a situação final do aluno.
const alunoBoletim = {
    nome: "Maria",
    nota1: 8,
    nota2: 7
};

const mediaAluno = (alunoBoletim.nota1 + alunoBoletim.nota2) / 2;

if (mediaAluno >= 7) {
    console.log(`O aluno ${alunoBoletim.nome} está aprovado com média ${mediaAluno.toFixed(1)}.`);
} else {
    console.log(`O aluno ${alunoBoletim.nome} está reprovado com média ${mediaAluno.toFixed(1)}.`);
}   

//Exercício 30: (Desafio final) Crie um programa com pelo menos três alunos. Cada aluno deve possuir nome, nota 1 e nota 2.
// Para cada aluno, o programa deve calcular a média e exibir:
// - nome;
// - primeira nota;
// - segunda nota;
// - média final;
// - situação: aprovado, recuperação ou reprovado.

const alunosDesafio = {

    aluno1: {
         nome: "Arthur",
            nota1: 8,
            nota2: 5,
    },
    aluno2: {
        nome: "Eric",
        nota1: 5,
        nota2: 4,

    },
    aluno3: {
        nome: "Caio",
        nota1: 7,
        nota2: 9,
    }
};

for (const aluno in alunosDesafio) {
    const mediaAluno = (alunosDesafio[aluno].nota1 + alunosDesafio[aluno].nota2) / 2;
    let situacao;
    console.log(`Aluno: ${alunosDesafio[aluno].nome}`);
    console.log(`Nota 1: ${alunosDesafio[aluno].nota1}`);
    console.log(`Nota 2: ${alunosDesafio[aluno].nota2}`);
    console.log(`Média final: ${mediaAluno.toFixed(1)}`);
    console.log(`Situação: ${mediaAluno >= 7 ? "Aprovado" : mediaAluno >= 5 ? "Recuperação" : "Reprovado"}`);
}