let array = [1,2,3,4,5]
console.log([].indexOf(0))

const reducer = function(previousValue, currentValue, currentIndex, array) {
  console.log(previousValue)
  console.log(currentValue)
  console.log(currentIndex)
  console.log(array)
}



// indexof의 값이 없으면 -1이 된다.