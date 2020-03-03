// Функция добавляет элемент в список перед уже существующим списком


const prepend = (num, list) => {

 let result = {
  value: num,
  rest: list
 }
return result;
};
 


console.log(prepend(10, prepend(20, null)));