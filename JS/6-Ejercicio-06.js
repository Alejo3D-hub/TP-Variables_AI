let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

if (num1 > num2) {
  document.writeln("El " + num1 + " es el número más grande");
} else if (num2 > num1) {
  document.writeln("El " + num2 + " es el número más grande");
} else {
  document.writeln("Ambos números son iguales");
}
