const _ = require('lodash')
const Person = require('./Person')
let test
let array = [1,2,3,4,5]
console.log([].indexOf(0))

const reducer = function(previousValue, currentValue, currentIndex, array) {
  console.log(previousValue)
  console.log(currentValue)
  console.log(currentIndex)
  console.log(array)
}
// indexof의 값이 없으면 -1이 된다.

// arr: 배열값, fn: 연산을 진행할 fn, accumulator: 누산할 배열
function reduce(arr, fn, acculator) {
  let idx = -1,
    len = arr.length
  
  // 누산치를 지정하지 않으면 배열의 첫번째 원소를 초깃값으로 삼는다.
  if(!accumulator && len) {
    accumulator = arr[++idx];
  }

  while(++idx < len) {
    accumulator = fn(accumulator, arr[idx], idx, arr); // function을 반복합니다.
  }
  return accumulator // 단일 누산치를 반환
}


const p1 = new Person('Haskell','curry','1111-11-1111')
p1.address.country = 'US'
p1.birthDate  = 1900

const p2 = new Person('Barkley','Rosser','1111-11-1111')
p2.address.country = 'Korea'
p2.birthDate  = 1907

const p3 = new Person('Jhon','von Neumann','1111-11-1111')
p3.address.country = 'UK'
p3.birthDate  = 1904

const p4 = new Person('Alonzo','Church','1111-11-1111')
p4.address.country = 'Japan'
p4.birthDate  = 1903

var result = [];
var persons = [p1, p2, p3, p4]

test = _(persons).reduce((stat, person) => {
  const country = person.address.country // 거주 국가를 얻습니다.
  stat[country] = _.isUndefined(stat[country] ? 1: stats[county] + 1)
  return stat;
}, {})

console.log('ttt', test3)
console.log(test3)

const getCountry = person => person.address.country
const gatherStat = (stat, criteria) => {
  stat[criteria] = _.isUndefined(stat[criteria]) ? 1 : stat[criteria] + 1
  return stat
}

test = _(person).map(getCountry).reduce(gatherStat, {})