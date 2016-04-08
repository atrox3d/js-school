function creaSomma(num1) {

  var somma = function(num2) {
    return parseInt(num1) + parseInt(num2);
  }

  return somma;
}

function clickListener() {

  var somma1 = creaSomma(7) // la prima "costante" è 7

  console.log(somma1(2));
  console.log(somma1(5));
  console.log(somma1(23));

  var somma2 = creaSomma(9) // la seconda "costante" è 9

  console.log(somma2(45));
  console.log(somma2(6));
  console.log(somma2(24));
}

clickListener();