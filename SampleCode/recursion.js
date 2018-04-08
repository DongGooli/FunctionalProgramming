const Person = require('./Person')
const Node = require('./Node')
const _ = require('lodash')
/*
  재귀란 주어진 문제를 자기 반복적인 문제들로 잘개 분해한 다음, 이들을 다시 조합해 원래의 문제를 찾는 기법.
  1. 기저케이스(종료조건)
  2. 재퀴케이스

  기저 케이스는 재귀 함수가 구체적인 결괏값을 바로 계산할 수 있는 입력 집합입니다.
  재귀 케이스는 함수가 자신을 호출 할 때 전달한 입력 집합을 처리합니다.
  입력 집합이 점점 작아지지 않으면 재귀가 무한히 돌다가 프로그램이 종료됩니다.
*/


var acc = 0;
var nums = [1,2,3,4,5,6]
const isValide = (p => p !== undefined && p !== null)

// console.log(_.first(nums))
console.log(_.rest([1,2,3,4,5,6]))


for(let i =0; i< nums.length; ++i) {
  acc += nums[i]
}


_(nums).reduce((acc, current) => acc + current, 0);
function sum(arr, acc = 0) {
  if(_.isEmpty(arr)) { //기저케이스 종료조건
    return 0;
  }

  return sum(_.rest(arr), acc + _.first(arr)) // 꼬리 위치에서 재귀호출
}



const church = new Node(new Person('Alonzo', 'Church', '111-11-1111'))
console.log(church)