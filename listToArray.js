//  listToArray Функция которая превращает список (объект) в массив

// nth Функция которая в качестве аргументов принимает список и число, 
// а возвращает элемент на заданной позиции в списке или же undefined в 
// случае отсутствия такого элемента.

let listExample = { 
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

const nth = (list, num) => {

  let result = listToArray(list),
      end = result[num];


  return end;
}

console.log(nth(listExample, 2));