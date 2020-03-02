let list = {
 value: 1,
 rest: {
  value: 2, 
   rest: {
    value: 3,
    rest: null
  }
 }
};

let arrEx = [1, 2, 3, 4];


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

