const _ = require('lodash')
const Person = require('./Person')
/*
  정답에 이르기까지 거치는 경로를 제어흐름이라고한다.
  보통 작업을 수행하는 단계에는 루프와 분기분, 구문마다 값이 바뀌는 변수들로 빼곡히 들어찬다.
*/
/*
   1. 메서드 체이닝
   매개변수는 모두 함수 선언부에 명시 부수효롸를 없애고 원본 객체를 바꾸지 않아야 한다는 함수형 교리를 지키자.
   근데 가독성이 떨어지고 로직파악이 힘들다.
*/
  console.log('Funtional Programming'.substring(0,10).toLowerCase() + 'is fun')
  // concat(toLowerCase(substring('Functional Programming', 0, 10)), 'is fun')

/*
   2. 함수 체이닝
   함수형 프로그래밍에서는 흔한 자료구조를 이용해 다수의 굵게 나뉜 고계 연산을 적용한다.
   - 작업을 수행하기 위해 무슨 일을 해야 하는지 기술된 함수를 인수로 받는다.
   - 임시 변수의 값을 계속 바꾸면서 부수효과를 일으키는 기존 수동 루프를 대체
*/

const p1 = new Person('Haskell','curry','1111-11-1111')
p1.address = 'US'
p1.birthDat  = 1900

const p2 = new Person('Barkley','Rosser','1111-11-1111')
p2.address = 'Korea'
p2.birthDat  = 1907

const p3 = new Person('Jhon','von Neumann','1111-11-1111')
p3.address = 'UK'
p3.birthDat  = 1904

const p4 = new Person('Alonzo','Church','1111-11-1111')
p4.address = 'Japan'
p4.birthDat  = 1903


/*
  3.1 람다 표현식
    3.1.1. (params1, params2) => expression(반환값)
    3.1.2. (params1, params2) => {
      state1
      state2
      return finalstatement
    }
*/
    const name = p => p.address

// 3.2 _.map

    var result = [];
    var person = [p1, p2, p3, p4]

    for(let i = 0; i < person.length; ++i) {
      var p = person[i]
      if(p !== null && p!== undefined) {
        result.push(p._firstname)
      }
    }
    // console.log(result)

// map으로 바꾸보자!
    function map(arr, fn) {
      const len = arr.length,
            result = new Array(len)
      for(let idx = 0; idx < len; ++idx) {
        result[idx] = fn(arr[idx], idx, arr)
      }
      
      return result
    }
    const myMap = map
    let test = myMap(person, s => 
      (s !== null && s !== undefined) ?  s.firstname : ''
    )
    console.log('test', test)

    const test2 = _(person).reverse().map(p => {
      console.log(p)
      return (p !== null && p !== undefined) ? p._firstname : '' 
    })