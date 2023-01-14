
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
  let array = [...arr];

  if (array.lenght === 0) {
    return 0;
  } else {
    let sum = Number(array.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2));

    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  let array = [...arr];

  if (array.lenght === 0) {
    return 0;
  } else {
    let min = Math.min.apply(null, array);
    let max = Math.max.apply(null, array);

    return max - min;
  }

}

function differenceEvenOddWorker(...arr) {
  let array = [...arr];
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (array.lenght === 0) {
    return 0;
  } else { 
    for (let i = 0; i < array.length; i++ ) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
      } else {
        sumOddElement += arr[i];
      }
    }

    return sumEvenElement - sumOddElement;
  }

}

function averageEvenElementsWorker(...arr) {
  let array = [...arr];
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (array.lenght === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i] % 2 === 0) {
        sumEvenElement += array[i];
        countEvenElement += 1;
      } 
    } 

    return sumEvenElement / countEvenElement;
  }
}

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
