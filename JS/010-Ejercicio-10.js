let num = parseInt(prompt("Ingresa un número:"));

if (num % 2 === 0) {
  document.writeln("El " + num + " es divisible por 2.");
} else if (num % 3 === 0) {
  document.writeln("El " + num + " es divisible por 3.");
} else if (num % 5 === 0) {
  document.writeln("El " + num + " es divisible por 5.");
} else if (num % 7 === 0) {
  document.writeln("El " + num + " es divisible por 7.");
} else {
  document.writeln("El " + num + " no es divisible por 2, 3, 5 ni 7.");
}
