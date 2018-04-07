const _ = require('lodash')
/*
  주요 Lodash 함수들
*/
var users = [
  { 'user': 'barney'},
  { 'user': 'fred'},
  { 'user': 'dongsu'},
]

var array = [1,2,3,4]
let test = undefined
/*
  * forEach 와 map의 차이점!!!!!
  * map은 각 루프에서  return이 가능하다.
*/
_.forEach({ 'a': 1, 'b': 2 }, (n, key) => {
  console.log('forEach: (value, key)', n, key);
});

// value값 위주로 움직이는것 같다.
test = _.map([1,2,3], n => n * 3)
console.log('map: 객체를 순회하며 fn을 인자로 넣어 계산합니다.', test)

// key값만 집어넣을 경우 해당 value를 반환해 줍니다.
test = _.map(users, 'user')
console.log('Value를 찾아 반환해 줍니다.', test)


/*
  map과 forEach의 차이를 알아보기 위한 예제
*/
console.log('map과 forEach의 차이점을 알아보자')
var a = [1,2,3,4,5];
var b = a.forEach((v, i) => {
  console.log(v, '---', i )
  return v+1;
})
var c = a.map((v, i) => {
  return v+1;
});
console.log(b)
console.log(c)
console.log('그만 알아보자')

test = _.every(array, v => {
  console.log('every: 배열 인자를 순회 합니다.', v)
})

// 객체안에 Value가 있는지 찾는다. 
test = _.includes(users, 'barney');
console.log('includes: 객체안의 Value를 확인합니다.', test)

test = _.remove(array, n => {
  return n % 2 == 0
})
console.log('remove: 해당 fn에 대해 제거된 값들만 보여줍니다', test)

test = _.toArray('this is so Amazing')
// console.log(test)

// JSON Object로 이루어진 배열중에 특정 값만 filter 시킬떄 유용하다.
test = _.filter(array, n => {
  return n % 2 == 0
})
console.log('Filter: 참인 값들만 반환해 줍니다.', test)

test = _.fill(Array(5), 'Mocam')
console.log('배열값을 초기화 시켜 주세요!', test)


// 지금은 없어진 것 같다. lodash 4v 부터 map으로 
// test = _.pluck(users, 'user')
// console.log('객체로 구성된 배열에서 객체의 특정키를 추출', test)

