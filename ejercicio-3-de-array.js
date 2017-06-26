var numero = [7,21,44,80,77,35];
var x = 7;
var arreglo = [];
var resultado = numero.forEach(multiplo);
function multiplo(numero){
  if(numero % x == 0){
    arreglo.push(numero);
  }
}
console.log(arreglo);
