
// function doit(a,b) {
//   return (b == 0) ? a : doit(b, a % b);
// }
// echo doit(1071, 1029); // 21

function doit(a, b) {
  return (b === 0) ? a : doit(b, a % b)
}

console.log(doit(1071, 1029))

function workIt(a, b) {
  let num1 = a
  let num2 = b
  while (num2 !== 0) {
    num1 = num2
    num2 = a % num2
  }
  return num1
}

console.log(workIt(1071, 1029))