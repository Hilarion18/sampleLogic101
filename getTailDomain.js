// Sample
// getTopLevelDomain('http://www.google.de/something');
// => de
// getTopLevelDomain('http://www.amazon.co.uk/something');
// => co.uk

function getTopLevelDomain(str) {
  let countPoint = 2
  let result = ''
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '.') {
      countPoint -= 1
    }
    if (countPoint <= 0) {
      if (str[i] !== '/' || i !== str.length - 1) {
        result += str[i]
      }
      } else if (i === str.length -1) {
        result = 'Please input valid url'
    }
  }
  return result
}

console.log(getTopLevelDomain('http://www.google.de/something'))
console.log(getTopLevelDomain('http://www.amazon.co.uk/something'))
console.log(getTopLevelDomain('http://www.amazon.co.uk'))
console.log(getTopLevelDomain('http:co.uk'))
console.log(getTopLevelDomain('bit.ly')) // if want to get the real web inside shorten link we can use library of the shorten link itself