// ex1
/* 아래 소스의 경우 원소의 개수가 많을 경우 페이지는 멈춰버린다. */
var res = [];

function response(data) {
  res = res.concat(
    data.map(function(val) {
      return val * 2;
    })
  )
}
ajax('url', response)
// ex2
/* 아래 소스는 위의 코드를 원하는대로 수정한 경우이다. */

var res = []
function response(data) {
  // 한번 실행시 1,000개씩 실행한다.
  var chunk = data.splice(0, 1000);
  res = res.concat(
    chunk.map(val => {
      return val * 2
    })
  )

  if(data.length > 0) {
    setTimeout(function() {
      response(data)
    },0)
  }
}