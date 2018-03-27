// ES5 이전
for(var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('숫자 : ', i)
  }, 1000)
}

// ES6 이후
for(let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('숫자 : ', i)
  }, 1000)
}
