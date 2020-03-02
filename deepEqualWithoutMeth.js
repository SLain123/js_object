// Функция глубокого сравнения объектов без использования методов

const deepEqual = (obj1, obj2) => {
  let resultGn = true;
  
  resultGn = deepObject(obj1, obj2);
  
  return resultGn;
}

const deepObject = (obj1, obj2) => {

  let result = true;

  for (let i in obj1) {                           
    for (let j in obj2) {     
      if (typeof(obj1[i]) == 'string' && typeof(obj2[i]) == 'string') {
        result = deepStringAndNumber(obj1[i],obj2[i]);

        if (result == false) {
          return false;
        }
      }

      else if(typeof(obj1[i]) == 'number' && typeof(obj2[i]) == 'number') {
        result = deepStringAndNumber(obj1[i],obj2[i]);

        if (result == false) {
          return false;
        }
      }

      else if(typeof(obj1[i]) == 'object' && typeof(obj2[i]) == 'object') {
        result = deepObject(obj1[i], obj2[i]);

        if (result == false) {
          return false;
        }
      }

      else result = false;

    }
  }
  return result;
}

const deepStringAndNumber = (a, b) => {

  if (a == b) {
    return true;
  }
  else return false;
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


// let objA = {
//   prop1: 'string',
//   prop2: 1000
// },

//     objB = {
//   prop1: {
//     sub1: 123,
//     sub2: 321
//   },
//   prop2: {
//     sub3: 123,
//     sub4: 321
//   },
//     }


console.log(deepEqual(objA, objB));