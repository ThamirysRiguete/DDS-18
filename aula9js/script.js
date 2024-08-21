//Mostra um alerta na página
//alert("OUTRA MENSAGEM")


/*
console.log("OLHA A MENSAGEM DE NOVO")

var texto = "Duquesa"
var numero = 99
var theBest =  true
var nulo = null
var indefinido

console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(theBest))
console.log(typeof(nulo))
console.log(typeof(indefinido))
*/

//Operadores
//Aritméticos: +-/*%
/*var a = 10
var b = 3


console.log("soma:", a+b)
console.log("subtração:", a-b)
console.log("multiplicação:", a*b)
console.log("divisão:", a/b)
console.log("módulo:", a%b)

//Lógicos: &&, ||, !
var verdade = true
var mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

//relacionais: >,<,>=,<=,==,!=,===,!==
var a = 10
var b = 5
var c = "10"

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a == c)
console.log(a === c)
console.log(a !== c)
*/

//condicionais
//if

/*
var estaVivo = false
if(estaVivo){
     console.log("Esta vivo");
}
else if(!estaVivo == false){
    console.log("Esta morto");
}
else{
    console.log("Não tá nada");
}

//Switch
var camisa = "Preta"
switch(camisa){
    case "Azul":
        console.log("a camisa é azul")
    break
    case "Azul":
    break
    case "Amarelo":
         console.log("A camisa é amarele")
    break
    case "Preta":
        console.log("A camisa é preta")
    break
    default:
        console.log("A camisa é sei lá")
    break           
}*/

//Loops
//For

/*
for(var i = 0; i < 5; i++){
    console.log("Estoy ahi");
}
    console.log("Acabou o FOR");

//while
var it = 1
while (it < 10){
    console.log("Estou aqui 2-0 retorno");
    console.log(it);
    it++
}
*/

/*
function teste1(){
    console.log("Estou aqui na função 1")
}


function teste2(){
    console.log("Estou aqui na função 2")
}

teste2()
*/

//Interação com o usuário via prompt

var numero = prompt("Digite um numero:")
var numero2 = prompt("Digite outro numero:")
var resultado = Number(numero) + Number (numero2)

console.log(resultado)

alert(resultado)