// var num = 9;
// var arr = [4,4,5,12];
// var res = arr.reduce(producto,num);

// function producto(anterior,actual){
//     return  anterior *  actual;
// }
// console.log(res);

var arr = [4,4,5,12];
var res = arr.reduce((producto,num)=> producto * num,9);

console.log(res);
