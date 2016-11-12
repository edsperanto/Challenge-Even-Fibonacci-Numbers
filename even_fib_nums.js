/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var first = 1;
  var second = 1;
  var holder = 0;
  var third = 0;

  // do your work here
  while(second <= maxFibValue) {
    //console.log(second);
    sum += second;
    holder = first + second;
    first = second;
    second = holder;
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};

console.log(_sumFibs(13));