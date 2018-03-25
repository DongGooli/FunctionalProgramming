/*
  함수형 프로그래밍 에서 함수는 작업의 기본 단위이다.
  FP의 함수는 수학책에 나오는 함수처럼 사용 가능한 결과를 낼 경우에만 유의미하고
  그 외에는 외부 데이터 변경 등의 부수효과를 일으킨다고 볼 수 있다.
  자바스크립트 함수에는 일급과 고계라는 두 가지 중요한 특성이 있다.
*/

/*
  자바스크립트 함수는 실제로 객체이기 때문에 일급이며, 일급 시민이라고도 한다.
*/

// 함수 선언 방법
function multiplier(a,b) {
  return a * b
}

// 익명함수
let square = function (x) {
  return x * x
}

// 람다 표현식
square = x => x * x;

// 객체 속성에 메서드 형태로 할당
const obj = {
  method: function(x) {
    return x * x;
  }
}

// 생성자 함수를 통한 호출
const multiplier2 = new Function('a', 'b', 'return a * b')

/*
  자바스크립트 함수는 모두 Function 형식의 인스턴스이다.
  함수의 length 속성은 정규 매개변수 개수를 나타내며, apply(), call() 메서드는 함수를 
  주어진 콘텍스트로 호출한다.
*/

const people = [1,10,2,21,30,31,11]

// 해당 규칙은 내림차순 규칙이다.
// sort() 같은 자바스크립트 함수는 값을 할당할 수 있으면서
// 다른 함수도 인수로 받을 수 있으므로 고계함수 범주에 속한다.
people.sort((p1,p2) => p2 - p1)


/*
  comparator 함수는 p1,p2의 두가지 배개변수를 받는다.
  1. comparator가 0보다 작은 값을 반환하면 p1이 p2보다 앞으로 온다.
  2. comparator가 0을 반환하면 p1,p2 순서는 그대로이 이다.
  3. comparator가 0보다 큰 값을 반환하면 p1이 p2뒤로 간다.
 */

console.log(people)



