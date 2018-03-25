
// country나 school은 out enviorment이기 때문에 사용 가능하다.
var selector = (country, school) =>
  (student) => 
  student.address.country === country &&
  student.school === school


