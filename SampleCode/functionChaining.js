const _ = require('lodash')

var names = ['alonzo church', 'Haskell curry', 'stephen_kleene', 'Jhon Von Neumann', 'stephen_kleene']

var result = []
for(let i = 0; i < names.lenght; ++i) {
  var n = names[i]
  if( n !== undefined || n !== null) {
    var ns = n.replace(/_/, ' ').split(' ') // 언더바와 띄어쓰기는 띄어쓰기로 변경!
    for(let j = 0; j< ns.length; ++j) {
      var p = ns[i]
      p = p.charAt(0).toUpperCase() + p.slice(1)
      ns[j] = p
    }
    if(result.indexOf(ns.join(' ')) < 0) result.push(ns.join(' '));
  }
}

result.sort()

// 어우 고생했다. 이제 이쁘게 바꿔보자.
const isValid = n => n !== undefined && n !== null
var test = _.chain(names)
.filter(isValid) // 유효성 검사ㅓ
.map(s => s.replace(/_/, ' '))
.uniq() // 중복제거
.map(_.startCase) // 첫글자를 대문자로 바꿔준다.
.sort() // 말그대로 정렬
.value() // 함수 체인을 시작하겠다는 의미!

console.log(test)

/*
  _.chain 함수는 주어진 입력을 원하는 출력으로 변환하는 연산들을 연결함으로써
  입력 객체의 상태를 확장한다. _(...) 객체로 단축 표기한 구문과 달리, 이 함수는 임의의 함수를
  명시적으로 체이닝 가능한 함수로 만듭니다. 
*/