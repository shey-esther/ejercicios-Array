// var array = [784123123,355676784,3423543554];
// var array2 = [784];
// var res = array.filter(numValido);
// console.log(res);
// function numValido(num){
//   var los3primeros = num.toString().substr(0,3);
//   var los3ultimos = num.toString().substr(-3);
//   if(los3primeros == array2[0] || los3ultimos == array2[0]){
//     return true;
//   }else{
//     return false;
//   }
// }

var array = [784123123,355676784,3423543554];
var res=array.filter((primeros)=>primeros.toString().substr(0,3) == 784)
var res=array.filter((ultimos)=> ultimos.toString().substr(-3) == 784)
console.log(res);
