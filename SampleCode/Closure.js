/*
  클로저란? 함수를 선언할 당시의 환경에 함수를 묶어둔 자료구조이다.
  함수 선언부의 물리적 위치에 의존하므로 정적 스코프 혹은 어휘 스코프라고 한다.
  함수가 자신을 둘러싼 주변 상태에 접근할 수 있기 떄문에 클로저를 이용하면 명확하고 가독성 높은 코드를 작성할 수 있다.
  이벤트처리 및 콜백, 프라이빗 변수 모방, 그리고 자바스크립트 단점 보완에 유익하다.

  스코프 규칙과 밀접한 관련이 있다.
  스코프는 일련의 변수 바인딩을 한데 모아 변수가 정의된 코드 영역을 확정하는데,
  사실상 클로저는 함수의 스코프를 상속하였다.
*/

function makeAddFunction(amount) {
  function add(number) { // add 함수는 makeAddFunction에 어휘적으로 바인딩 되어 amount 변수에 접근 가능하다.
    return number + amount
  }
  return add
}

function MakeExponentialFunction(base) {
  function raise(exponent) {
    return Math.pow(base, exponent)
  }
  return raise
}


// 클로저를 느껴보자!
const outerVar = 'outer Scope' // Outer Scope
function makeInner(params) {
  const innerVar = 'inner Scope' //Inner Scope
  function inner() {
    console.log(
      `${outerVar}, ${innerVar}, ${params}가 나타납니다.`
    )
  }
  return inner
}
const test = makeInner('과연 나타날까?')
test()

// 스코프르 느껴보자
function doWork() {
  if(!myVar) {
    var myVar = 10
  }
  console.log(myVar)
}
doWork()

// Ambigious Loop Counter Problem
var arr = [1,2,3,4]

function processArr() {
  function multipleBy10(val) {
    i = 10;
    console.log(`i값은 ${i} val값은 ${val}`)
    return val * i
  }
  for(var i = 0; i < arr.length; i++) {
    arr[i] = multipleBy10(arr[i])
  }

  return arr
}

console.log(processArr())

/*
  클로저 응용
  1. 프라이빗 변수를 모방
  2. 서버측 비동기 호출
  3. 가상의 블록 스코프 변수를 생성
*/

//1-(1) IIFE를 사용한 프라이빗 변수 모방
var Mymodule = (function Mymodule(exported) { // 에러 발생 시 스택을 보며 추적할 때 IIFE를 식별할 수 있도록 기명함수를 사용
  let _myPrivateVar = 'hello' // 밑에 두 메서드를 제외하고 프라이빗 변수는 이 함수 밖에서 접근할 수 없다.

  exported.method1 = function() {
    console.log('method1')
  }

  exported.method2 = function() {
    console.log('method2')
  }
  return exported
}(Mymodule || {}))


//2-(1) 서버 측 비동기 호출
