// sample
// searchClosest(4.5, array(-1.5, 0, 4.4, 5, 6, 7));
// => 4.4
// searchClosest(5.5, array(-1.5, 0, 4.4, 5, 6, 7));
// => 6

function searchClosest(val, arr) {
  let minDistance = Math.abs(arr[0] - val)
  let result = arr[0]
  for (let i = 0; i < arr.length; ++i) {
    if (Math.abs(val - arr[i]) <= minDistance) {
      minDistance = Math.abs(val - arr[i])
      result = arr[i]
    }
  }
  return result
}

console.log(searchClosest(4.5, [-1.5, 0, 4.4, 5, 6, 7]))
console.log(searchClosest(5.5, [-1.5, 0, 4.4, 5, 6, 7]))