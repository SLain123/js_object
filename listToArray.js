// Функция которая превращает список (объект) в массив

let list1 = { 
 value: 10, 
 rest: { 
  value: 20, 
  rest: { 
   value: 30, 
   rest: {
    value: 40,
    rest: null
   } 
  } 
 } 
};

const listToArray = list => {

 let arr = [],
     iter = -1;

 const count = list => {

  iter++;

  for(let key in list) {

   if (key == 'value') {
   arr[iter] = list[key];
  }
   else if (key == 'rest') {
    count(list[key]);
   }
 }

  return arr;
 }

 count(list);

 return arr;
};

console.log(listToArray(list1));