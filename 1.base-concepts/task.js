"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let rootOne;
  let rootNext;

  if ( d === 0 ) {
    rootOne = - b / (2 * a);
    arr.push( rootOne );
  } else if ( d > 0 ){
    rootOne = ( - b + Math.sqrt(d) ) / ( 2 * a );
    arr.push( rootOne );
    rootNext = ( - b - Math.sqrt(d) ) / ( 2 * a );
    arr.push( rootNext );
  }

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent;
  let credit;
  let pay;
  let totalPay;

  if ( isNaN( percent ) || 
       isNaN( contribution ) || 
       isNaN( amount ) || 
       isNaN( countMonths ) ) {
    return false;
  }

  monthPercent = ( percent / 100 ) / 12;
  credit = amount - contribution;
  pay = credit * ( monthPercent + ( monthPercent / ((( 1 + monthPercent ) ** countMonths ) - 1)));
  totalPay = parseFloat(( pay * countMonths ).toFixed(2));

  isNaN(totalPay);

  return totalPay;
}