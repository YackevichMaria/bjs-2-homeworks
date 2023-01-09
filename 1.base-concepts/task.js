"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  let rootOne;
  let rootNext;

  if ( D < 0 ){
    console.log("Дискриминант меньше нуля, корней нет")
  } else if ( D === 0 ) {
    rootOne = - b / (2 * a);
    arr.push( rootOne );
  } else {
    rootOne = ( - b + Math.sqrt(D) ) / ( 2 * a );
    arr.push( rootOne );
    rootNext = ( - b - Math.sqrt(D) ) / ( 2 * a );
    arr.push( rootNext );
  }

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}