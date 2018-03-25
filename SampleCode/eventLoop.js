// 자바 스크립트 이벤트 루프 의사코드
var eventLoop = [];
var event;

while(true) {
  if(eventLoop.length > 0) {
    event = eventLoop.shift()
  }
  try {
    event();
  } catch (err) {
    reportError(err)
  }
}
/*
 while 루프의 매 순회를 틱이라 한다.
 틱이 발생할 때마다 큐에 적재된 이벤트를 꺼내어 실행한다.
 setTimeout()은 이벤트 루프 큐에 넣는 함수가 아니다.
 해당 설정 시간이 지난후에 이벤트 루프에 들어간다.
 ES6에서는 호스팅 환경이 아닌 자바스크립트 엔지이 이벤트 루프를 관할하게 되었다.
 이유는 프로미스의 도입 때문이다.
*/
