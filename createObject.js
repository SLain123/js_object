// Функция преобразующая массив в список

let arrEx = [10, 20, 30];


const arrayToList = arr => {
 
 let iter = -1,
     result = {};
     
 const add = (iter, arr) => {
  iter += 1;
 
  if (iter < arr.length) {

  result = {
   value: arr[iter],
   rest: add(iter, arr)
  };
 }
 
 else {
  return null;
  }


  return result;
 }

add(iter, arr);

return result; 
}

console.log(arrayToList(arrEx));


