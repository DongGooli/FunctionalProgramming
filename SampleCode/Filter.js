const _ = require('lodash')
/*
  큰 데이터 컬렉션을 처리할 경우 ,계산하지 않을 데이터는 미리 처리해주는게 좋습니다.
  filter는 select라고도 합니다. 배열 원소를 반복하면서 술어 함수 P가 true를 반환하는 원소만 추려내고 그 결과를 새 배열에 담아 반환하는 고계함수이다.
*/

var array = ['한국','미국','일본','한국']
// 구현해 보자!
function filter(arr, predicate) {
  let idx = -1
  len = arr.length
  result = [] // 결과를 담을 배열 입니다.

  while(++idx < len) {
    let value = arr[idx]
    if(predicate(value, idx)) {
      result.push(idx)
    }
  }
  return result
}

// predicate는 실행결과가 true면 원소를 유지하고 false면 값을 버립니다.
// predicate는 사용자가 원하고자 하는 논리를 구별하는데 이용되는 함수이다.
function predicate(value, index) {
  return value === '한국'
}
const myFilter = filter
var test = myFilter(array, predicate)
test = _(array).filter(predicate)
console.log(test)

//두번째 테스트를 해보자
var persons = [
  {
    name: 'dongsu',
    age: '28',
    address: '서울',
  },
  {
    name: 'minsu',
    age: '30',
    address: '서울',
  },
  {
    name: 'drake-jin',
    age: '27',
    address: '서울',
  },
]

predicate = person => person.age < 30;
const name = person => person.name
test = _(persons).filter(predicate).map(name).join(' and ');
console.log(test)
// * 자투리 지식 *

/*
  배열축약
  map, filter는 어떤 배열을 받아 새 배열을 내는 고계함수로, 하스켈, 클로저 등 대부분의 함수형 프로그램이 언어에
  기본적으로 내장되어 있습니다.
  이들을 조합하는 대신 "배열축약"이란 개념을 적용할 수도 있다.
  배열 축약은 map, filter의 기능을 각각 for ...of와 if 키워드를 이용하여 단축된 구문으로 캡슐화하는 함수형 장치이다.

  [for ( x of iterator) if (predicate) X]

  위의 예제를 배열축약으로 나타내면
  [for (p of people) if (p.age < 30) p.name].join(' and ')
*/

