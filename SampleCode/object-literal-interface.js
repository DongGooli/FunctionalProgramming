/*
  메서드를 일부만 호출자에 공개하고 _code, _location를 의사-프라이빗 변수처럼 다루는
  객체 리터럴 인터페이스를 반환하는 식으로 자바스크립트 함수를 이용하면 우편번호의
  내부 상태 접근을 차단할 수 있습니다.
  이런 변수는 클로저를 거쳐야만 객체 리터럴에 접근할 수 있다.
*/

function zipcode(code, location) {
  let _code = code
  let _location = location || ''

  return {
    code: function() {
      return _code
    },
    location: function() {
      return _location
    },
    fromString: function(str) {
      let parts = str.split('-')
      return zipcode(parts[0], parts[1])
    },
    toString: function() {
      return _code + '-' + _location
    }
  };
}

const princetonZip = zipcode('08544', '3345')
console.log(princetonZip.toString())

function coordinate(lat, long) {
  let _lat = lat
  let _long = long

  return {
    latitude: function() {
      return _lat
    },
    longitude: function() {
      return _long
    },
    translate: function() {
      return coordinate(_lat + dx, _long + dy)
    },
    toString: function() {
      return '('+_lat+','+_long+')'
    }
  };
}

const greenwich = coordinate(51,4778, 0.0015);
console.log(greenwich.toString())
