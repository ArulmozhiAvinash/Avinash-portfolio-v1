const response = await fetch('https://jsonmock.hackerrank.com/api/countries?name=Afghanistan');
const capital = await response.json();
console.log(capital);
if (capital && capital.total && capital.total > 0 && capital.data && capital.data > 0) {
  console.log(capital.data[0].capital)
} else {
  console.log('-1')
}