// Sample
// makePalindrome('abc')
// => 2
// (The palindrome would be 'aba', so from 'abc' => 'abb' => 'aba')
// makePalindrome('abcde')
// => 6
// (The palindrome would be 'abcba', so from 'abcde' => 'abcdd' => 'abcdc' => 'abcdb' => 'abcda' => 'abcca' => 'abcba')
// makePalindrome('aaa')
// => 0
// (The palindrome would be 'aaa', zero steps, it already is a palindrome)

function makePalindrome(str) {
  let dictionary = 'abcdefghijklmnopqrstuvwxyz'
  let duplicate = ''
  let startingPoint = 0
  let countResult = 0
  let countIndex = 1
  let oddsEven = 0
  for (let i = str.length-1; i >= 0; --i) {
    duplicate += str[i]
  }
  if (str.length % 2 === 0) {
    startingPoint = str.length/2
    oddsEven = 1
  } else {
    startingPoint = Math.ceil(str.length/2)
    oddsEven = 2
  }
  while (duplicate !== str) {
    countResult += 0
    for (let i = 0; i < str.length; ++i) {
      if (i === startingPoint) {
        if (str[i] !== str[i - oddsEven]) {
          for (let j = 0; j < dictionary.length; ++j) {
            if (str[i] === dictionary[j]) {
              str[i] = dictionary[j-1]
            }
          }
          countIndex++
          oddsEven += countIndex
          countResult++
          startingPoint++
        }
      }
    }
  }
  return countResult
}

console.log(makePalindrome('abc'))
// console.log(makePalindrome('abcde'))
// console.log(makePalindrome('aaa'))
// console.log(makePalindrome('aaaa'))