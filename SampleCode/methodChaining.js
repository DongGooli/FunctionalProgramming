// lodash 사용이유와, 형변환에 대해서 궁금..
// 공부 더 해야 할 것 같다.
const _ = require('lodash')

'Functional Programming'.substring(0,10).toLowerCase() + 'is fun';

// concat(toLowerCase(substring('function Programming', 1, 10)), 'is fun');

class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname
    this._lastname = lastname
    this._ssn = ssn
    this._address = null
    this._birthYear = null
  }

  get ssn() {
    return this._ssn
  }
  get firstname() {
    return this._firstname
  }
  get lastname() {
    return this._lastname
  }
  get address() {
    return this._address
  }
  get birthYear() {
    return this._birthYear
  }
  set birthYear(year) {
    return this._bithYear = year
  }
  set address(addr) {
    return this._address = addr
  }
  toString() {
    return `Person(${this._firstname}, ${this._lastname}`
  }
}

var p1 = new Person('haskell', 'curry', '444-44-4444')
var p2 = new Person('123123', 'curry', '444-44-4444')
var p3 = new Person('asdfasdf', 'curry', '444-44-4444')
var p4 = new Person('xcme', 'curry' , '444-44-4444')

var result = []
var persons = [p1, p2, p3, p4]
var s = []

// 람다 표현식
const name = p => p.fullname;

for(let i = 0; i < persons.length; ++i) {
  var p = persons[i]

  if(p !== null && p !== undefined) {
    result.push(p._firstname)
  }
}
console.log(result)

// map은 배열 각 원소에 이터레이터 함수를 적용하여 크기가 같은 새 배열을 반환하는 고계함수이다.
const m = _.map(persons, s => (s !== null && s !== undefined) ? s._firstname : '')

const t = _(persons).reverse().map(
  p => ( p !== null && p !== undefined) ? p.fullname : ''
)


// map 함수는 다음과 같이 구현부
function map(arr, fn) {
  const len = arr.length,
  result = new Array(len);
  for(let idx = 0; idx < len; ++idx) {
    result[idx] = fn(arr[idx], idx, arr);
  }
  return result
}

