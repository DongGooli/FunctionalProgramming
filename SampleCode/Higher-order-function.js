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
    console.log('신기한 자바스크립트 세계 : ', addr)
    return this._address = addr
  }
  toString() {
    return `Person(${this._firstname}, ${this._lastname}`
  }
}
/*
  함수는 함수를 인수로 전달하거나 함수를 반환받을 수 있다
  그러한 함수를 고계함수 higer-order-function이라 한다.
 */

function applyOperation(a, b, opt) {
  return opt(a,b)
}

const multiplier = (a, b ) => a * b;

// applyOperation의 인자로 multiplier로 넘겨주었다.
console.log(applyOperation(2,3, multiplier))

function add(a) {
  // 익명함수
  return function(b) {
    return a + b
  }
}
console.log(add(2)(3))


var p1 = new Person('haskell', 'curry', '444-44-4444')
var p2 = new Person('123123', 'curry', '444-44-4444')
var p3 = new Person('asdfasdf', 'curry', '444-44-4444')

const array = [p1, p2, p3]
// filter 메소드를 통해 구현해 보자
function printPeople(people) {
  if(people.firstname === '123123') {
    console.log(people.firstname)
  }
}
console.log(array.filter(printPeople))

// forEach 메소드를 통해 구현해보자

function printPeople2(people, selector, printer) {
  people.forEach(functoin (person) {
    if(selector(person)) {
      printer(person)
    }
  })
})
const inUs = person => person.firstname === '123123';

printPeople(people, inUs, console.log)