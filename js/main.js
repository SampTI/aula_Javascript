//Action botões
function Clicked(){
    document.getElementById("congratulations").innerHTML = "<b>Thanks for clicking</b>";
    //console.log(document.getElementById("congratulations"))
    //alert("Obrigado por clicar");
}

function redirar(){
    //window.open("https:www.linkedin.com/in/tiago-sampaio-9a5982208");
    window.location.href = "https:www.linkedin.com/in/tiago-sampaio-9a5982208";
}

function exchange(element){
    //document.getElementById("mousemove").innerHTML = "Thanks"
    element.innerHTML = "Thanks";
    //alert("to exchanger text");
}

function Return(element){
    //document.getElementById("mousemove").innerHTML = "Pass mouse here"
    element.innerHTML = "Pass mouse here";
}

function load(){
    alert("Page loaded")
}

function functionChange(element){
    console.log(element.value);
}

/*Funções
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Informe a sua idade");
console.log(validaIdade(idade));

alert(soma(10, 5));
*/

/*Datas
var d = new Date()
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
console.log(d);
/*

/*Laços de repetição
for(var count=0; count<=5; count++){
    console.log(count);
};
*/
/*
var count = 1;
while(count <= 5 ){
    console.log(count);
    count++;
};

//Comparação
var idade = prompt("Qual a sua idade: ");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
}*/


/* Lista e dicionario
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}, {nome:"limão", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome)*/


//listas
/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)*/

//var lista = ["maça", "pêra","laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" | "))



//Variaveis, Console e alert
/*var nome = "Tiago Sampaio";
var n1 = 5;
var n2 = 3;
var frase = "Japão é a melhor seleção do mundo"
alert(nome + " tem "+ idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(n1 / n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
alert(frase.replace("Japão", "Brasil"))*/
