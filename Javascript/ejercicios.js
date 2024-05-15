// Ejercicio 1.1
let x = 10 + 5 * 2;
document.getElementById("casa").innerHTML = x;

// Ejercicio 1.2
let y = (10 + 5) * 2
document.getElementById("zapato").innerHTML = y

// Ejercicio 1.3
let z = 10 + (5 * 2)
document.getElementById("animal").innerHTML = z

// Ejercicio 2
let a = 3.14 * 100
document.getElementById("clase").innerHTML = a

// Ejercicio 3.1
let b = 10 ** 3
document.getElementById("flor").innerHTML = b

// Ejercicio 3.2
let c = 10 ** -3
document.getElementById("mesa").innerHTML = c

// Ejercicio 4
let t = 6
let r = 4
let total = 6 * 4 / 2
document.getElementById("triangulo").innerHTML = total

// Ejercicio 5 (No es posible realizar la operación)
let d = (25 / 0 ) + 10
console.log (d);
document.getElementById("operacion1").innerHTML = d

// Ejercicio 6 (Encuentra el perímetro de un cuadrado con un lado de longitud 8)
let lado = 8
let p = lado * 4
document.getElementById("perimetro").innerHTML = p

// Ejercicio 7.1 (Calcula el resultado de 2 elevado a la 3)
let e = 2 ** 3
console.log (e);
document.getElementById("exponente1").innerHTML = e

// Ejercicio 7.2 (Calcula el resultado de 2 elevado a 0)
let f = 2 ** 0
console.log (f);
document.getElementById("exponente2").innerHTML = f

// Ejercicio 7.3 (Calcula el resultado de 0 elevado a 0) 
let g = 0 ** 0
console.log (g);
document.getElementById("exponente3").innerHTML = g
// Cualquier número elevado a 0, siempre dara 1 como resultado