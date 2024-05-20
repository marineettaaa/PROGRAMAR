// Ejercicio 1

let radio = Number(prompt("Ingresa el radio de la circunferencia"));

const PI = 3.14;
let area = PI * radio ** 2;

// Mostrar el resultado en la página web
document.getElementById("resultado").innerHTML = "El área de la circunferencia es: " + area;

