console.log ("ejercicio 1")

let km = prompt ("kilometros");

let horas = prompt ("horas");

let velocidad = km / horas

 if (velocidad >= 40 && velocidad <= 60) [
    console.log ("No está descalificado")

 ]

 else (velocidad <40 >60)[
    console.log ("Estás descalificado")
 ]

console.log("Ejercicio 2")

 let nota1= prompt ("ingresa primera nota");
 let nota2= prompt ("ingresa segunda nota");
 let nota3= prompt ("ingresa tercera nota");

 let notapromedio= (nota1 + nota2 + nota3 / 3);

if (notapromedio  >=7)[ 
    console.log ("NOTABLE")

]
if (notapromedio >=5 && notapromedio <=6 )[
    console.log ("APROBADO")
]

if (notapromedio <4)[
  console.log ("SUSPENDIDO")
]

console.log ("Ejercicio 3")

let cliente = prompt ("bebidas");
let vino = cliente === "vino";
let cerveza = cliente === "cerveza";
let refresco = cliente === "refresco";
let agua = cliente === "agua";

if (vino,cerveza)[ 
    console.log ("A la barra")
]
else (refresco,agua)[
  console.log ( "barra comida")
]

console.log ("ejercicio 4")

let numero1= prompt ("Ingrese el numero");
let numero2= prompt ("Ingrese el numero");

numero1 > numero2
? console.log(numero1 - numero2 )
: numero2> numero1
? console.log (numero2 - numero1)
: console.log ("sin diferencia")

//Ejercicios 5

let numero = prompt ("Ingrese un numero")
let cuadrado = prompt("¡Recuerda! tiene que ser su cuadrado:)")
let resultado = numero ** 2 == cuadrado
? "MUY BIEN, has acertado"
: "Intentalo nuevamente";
alert(resultado);