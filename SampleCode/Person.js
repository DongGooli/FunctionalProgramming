module.exports = class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname
    this._lastname = lastname
    this._ssn = ssn
    this._address = null
    this._birthYear = null
    this._fullname = nulㅣ
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