/*
console.log('Hello World!');
console.log('Meu nome é "William". Estou aprendendo JavaScript às', 10, 'da manhã')
alert('Olá') 
let nome = 'Jão';
*/

/*
CALCULADORA DE IMC
const nome = 'William Sierro';
const idade = 34;
const peso = 215;
const altura = 1.86;
let imc;
imc = peso/(altura*altura);
let anoNascimento;
anoNascimento = 2024 - idade
console.log(nome, ' tem', idade, ' anos, e pesa ', peso)
console.log(`tem ${altura} de altura e seu IMC é de  ${imc}`)
console.log(nome, 'nasceu em', anoNascimento)
*/

/*
Como calular dados
let num1 = prompt('Digite um número: ')
let num2 = prompt('Digite outro número: ')
// let funcao = prompt('Você deseja fazer qual tipo de conta? (+ - / *)')
num1 = parseInt(num1)
num2 = parseInt(num2)
let soma = num1 + num2
alert(soma)
*/

/*
let varA = 'A'
let varB = 'B'
let varC = 'C'
[varA, varB, varC] = [varB, varC, varA]
const varATemp = varA
varA = varB
varB = varC
varC = varATemp
console.log(varA, varB, varC)
*/
/*
let umaString = "Um \"texto\""
console.log(umaString)
*/

/*
const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;

console.log(nome)
*/
/*
let num1 = 10.25 //number
let num2 = 10 //number
//console.log(num1.toString() + num2)
num1 = num1.toString()
console.log(num1.toString(2))
console.log(num1.toFixed(2))
console.log(Number.isInteger(num1))
console.log(Number.isNaN(num1))
*/
/*
let num1 = 9.54578

// let num2 = Math.floor(num1)
// let num2 = Math.ceil(num1)
// let num2 = Math.round(num1)

console.log(Math.max(1,2,3,4,5,56,152,23262,232))
const aleatorio = Math.random() * (10 - 5) + 5

console.log(aleatorio)
console.log(Math.pow(2, 10))
console.log(Math.pow(2, 10))
*/
/*
const numero = Number(prompt('Digite um número:'))
const numTitulo = document.getElementById('numTitulo')
const texto = document.getElementById('texto')
numTitulo.innerHTML = numero

numTitulo.innerHTML = `<p>Seu número é: ${numero}.</p>`
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${numero ** 0.5}.</p>`
texto.innerHTML += `${numero} é inteiro ${Number.isInteger(numero)}  <br />`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br />`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br />`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br />`;
texto.innerHTML += `Com 2 casas decimais: ${numero.toFixed(2)}<br />`;


console.log(nome)
*/
/*
// Funções
function saudacao(nome) {
    return `Bom dia! ${nome}!`
}
const vari = saudacao('william')
console.log(vari)
function soma(x, y) {
    const resultado = x + y
    return resultado
}
console.log(soma(2, 10))

const raiz = function(n) {
const raiz = (n) => {
    return n ** 0.5;
};
const raiz = n => n ** 0.5

console.log(raiz(9))
*/
/*
// Objetos
const array = [1,2,3]
array.push(4)
array[0] = 'Will'
// array = 'Outra' (não pode quando for const ou let)
console.log(array)
function criaPessoa(nome, sobrenome, idade) {
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        nome,
        sobrenome,
        idade
    }
}
const pessoa1 = {
    nome: 'Will',
    sobrenome: 'Sierro',
    idade: 34
}
const pessoa2 = criaPessoa('sierro', 'will', 34)
console.log(pessoa1, pessoa2)
*/

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi Enviado.')
    // }
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
            
        });
        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
    };
    form.addEventListener('submit', recebeEventoForm)
};
meuEscopo();
const array = []
function criaPessoa(nome, sobrenome, peso, altura) {
    return {nome, sobrenome, peso, altura}
}
