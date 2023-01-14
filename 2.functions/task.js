
// задача 1

function getArrayParams(...arr) {
  let array = [...arr];

  let min = Math.min.apply(null, array);
  let max = Math.max.apply(null, array);
  let sum = Number(array.reduce((accumulator, currentValue) => accumulator + currentValue / array.length, 0).toFixed(2));

  return { min: min, max: max, avg: sum };
}


// задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 

  let sum = Number(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2));

  return sum; 
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 

  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0;
  } 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

    return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    } 
  } 

  return sumEvenElement / countEvenElement;
}


// задача 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
 

  for (let i = 0; i < arrOfArr.length; i++ ) {
    const result = func(...arrOfArr[i]);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }

  }

return maxWorkerResult;
}
