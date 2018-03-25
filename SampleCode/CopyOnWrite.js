/*
  렌즈 또는 함수형 레퍼런스라고 불리는 기법을 통해
  사탱적 자료형의 속성에 접근하여 불변화하는 함수형 프로그래밍 기법이다.
  람다JS라는 자바스크립트 라이브러리를 사용하면 된다.
  기본적으로 람다JS는 전역 객체 R로 모든 기능을 노출합니다.
  Person의 lastname 속성은 R.lensProp을 써서 다음과 같이 렌즈로 감싸면 된다.
*/

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

  set lastname(lastname) {
    // 다른 속성의 상태도 전부 새 인스턴스에 일일이 복사해 넣어야 한다.
    return new Person(this._firstname, lastname, this._ssn)
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

var person = new Person('Alonzo', 'Church', '444-44-4444')
var lastnameLens = R.lensProp('lastname')

const newPerson = R.set(lastnameLens, 'Mourning', person)
console.log(R.view(lastnameLens, person))
