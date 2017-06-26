// var arreglo =[20,16,89,26];
// var resultado = arreglo.filter(nacimiento).map(mayorEdad);

// function mayorEdad(n) {
//   return 2017-n;
// }

// function nacimiento(edad){
//   if(edad % 2 == 0 && edad > 18){
//     return true;
//   } else
//     return false;
// }
// console.log(resultado);


var arreglo =[20,16,89,26];
var resultado = arreglo.filter((edad)=>edad % 2 == 0 && edad > 18).map(num => 2017-num);
console.log(resultado);
