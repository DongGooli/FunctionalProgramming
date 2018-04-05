/*
  함수 호출 요령
  자바스크립트 함수는 호출 시점의 런타임 콘텍스트, 즉 함수 본체 내부의 this 값을 자유롭게 지정할 수 있으며 호출하는 방법도 다양하다.
  1. 전역함수로 호출 : this 레퍼런스는 전역 객체, 또는 undefined(use strict)를 가리킨다.
  2. 메서드로 호출 : this 레퍼런스는 해당 메서드를 소유한 객체이다.
  3. 앞에 new를 붙여 생성자로 호출 : 새로 만든 객체의 레퍼런스를 암시적으로 반환
*/

// 1. 전역함수

function doWork() {
  this.myVar = '어떤값'
}

doWork() // <- doWork()에서 this 레퍼런스를전역 객체를 가리킨다.

// 2. 메서드로 호출
var obj = {
  prop: 'attribute',
  getProp: function() {
    return this.prop
  }
 }
 obj.getProp()

 // 3. 생성자 호출

 function MyType(arg) {
   this.prop = arg
 }

 var someVal = new MyType('어떤 인수')
