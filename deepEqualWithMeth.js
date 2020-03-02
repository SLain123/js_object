// Функция глубокого сравнения объектов с использованием методов

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}






var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
      subProp1: 'sub value1',
      subProp2: {
          subSubProp1: 'sub sub value1',
          subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
      }
  },
  prop5: 1000,
};

var objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop4: {
      subProp2: {
          subSubProp1: 'sub sub value1',
          subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
      },
      subProp1: 'sub value1'
  }
};



console.log(deepEqual(objA, objB));

// let obj = {
//   here: {
//     is: "an"}, 
//   object: 2
// };

//     console.log(deepEqual(obj, obj));
//     // → true
//     console.log(deepEqual(obj, {here: 1, object: 2}));
//     // → false
//     console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//     // → true   

