const Person = require('./Person')
exports.Person = class Person {
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

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school
  }

  get school() {
    return this._school
  }
}

const student = new Student('alonzo', 'Church', '666-66-6666', 'Princeton');

// 원래 바뀌어야 되는데 왜 안바뀌지..?
student.address = 'ttttt'

console.log(student)


/*
  자바스크립트의 새로운 클래스 구문 중에 불변 필드를 뵤시하는 키워드는 따로 없다.
  writable처럼 숨겨진 메터속성을 제어하면 내부 조작이 가능하다.
  object freeze() 함수는 writable 속성을 false 로 세팅해서 객체 상태를 못 바꾸게 동결한다.
*/

/* 
  Object.freeze()는 상속한 속성까지 고정하므로 Student 인스턴스를 동결하면
  이 객체의 프로토타입 체인을 따라가 Person이 물려준 속성 역시 모두 같은 방법으로 동결한다.
  단, 중첩된 객체 속성까지 동결하는건 불가능 합니다.
  이러한 경우를 얕은 동결이라 합니다.
*/
const person = Object.freeze(new Person('Haskell', 'Curry', '444-44-4444'))

// 동결시켜 놨기 때문에 오류가 납니다!
// person.address = 'Bob'

// console.log(person)


/*
  Address를 정의하고 확인해 봅시다.
*/

class Address {
  constructor(country, state, city, zip, street) {
    this._country = country
    this._state = state
    this._city = city
    // this._zip = zip
    this._street = street
  }

  get street() {
    return this._street
  }

  get city() {
    return this._city
  }

  get state() {
    return this._state
  }

  // get zip() {
  //   return this._zip
  // }

  get country() {
    return this._country
  }
}

var person2 = new Person('haskell', 'curry', '444-44-4444')
person2.address = new Address('Us', 'NJ', 'princeton', 'Alexander St.')

person2 = Object.freeze(person2)

person2.address._country = 'France'

console.log(person2.address.country)

/*
  깊은 동결을 시도해보자. 
  재귀함수를 통해 깊은 동결을 할 수 있다.
  수작업이다. 귀찮다. 노가다다.
*/

var isObject = (val) => val && typeof vall === 'object'

function deepFreeze(obj) {
  if(isObject(obj)
   && !Object.isFrozen(obj)) {
     // 객체의 모든 속성을 하나씩 반복하면 동결되지 않은 속성에 Object.freeze()를 재귀 호출합니다.
      Object.keys(obj).
        forEach(name => deepFreeze(obj[name]))
      Object.freeze(obj);
   }
   return obj
}

