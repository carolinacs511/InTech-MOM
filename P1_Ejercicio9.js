const numeros = [11, 8, 15, 9, 7];
const suma= numeros.reduce((accum,number) => (accum += number, accum),0);
console.log(suma);

const promedio = suma / numeros.length;
console.log("El promedio de" + " " + numeros + " "+ "es:" + promedio);
