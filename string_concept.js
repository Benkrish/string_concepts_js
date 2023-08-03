// Write a function to capitalize the first letter of a given string.
// Write a function to check if a string is a palindrome (reads the same forwards and backwards).
// Write a function to count the occurrences of a specific character in a string.
// Write a function to reverse a string without using the built-in reverse() method.
// Write a function to find the longest word in a sentence.
// Write a function to remove all whitespace from a string.
// Write a function to check if a string is an anagram of another string (contains the same characters in a different order).
// Write a function to find and replace a specific word in a sentence with another word.
// Write a function to truncate a string and append ellipsis (...) if it exceeds a specified length.
// Write a function to check if a string contains only numeric characters.

// 1st
function capital(str) {
  const word = str.charAt(0)
  newWord = word.toUpperCase()
  modStr = str.slice(1)
  return `${newWord}${modStr}`
}
console.log(capital('krishna'))

// 2nd
function checkPalin(str) {
  len = str.length
  for (let i = 0; i < len; i++) {
    if (str[i] != str[len - 1 - i]) {
      console.log('Not a palindrome')
    }
  }
  return `It's a palindrome`
}
console.log(checkPalin('LOL'))

// 3rd
function countOccu(s, w) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] == w) {
      count++
    }
  }
  return count
}

console.log(countOccu('Aakash', 'a'))

// 4
function rev(s) {
  str = ''
  for (let i = 0; i < s.length; i++) {
    str = s[i] + str
  }
  return str
}

console.log(rev('krishna ben'))

// 5
function longWord(s) {
  str = s.split(' ')
  console.log(str)
  let word
  let longest = 0
  for (let i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length
      word = str[i]
    }
  }
  return word
}
console.log(longWord('Hi This is Ben'))

// 6
function remWhitespaces(s) {
  str = ''
  str = s.replace(/\s/g, '')
  return str
}

console.log(remWhitespaces('ben is great'))

// 7
function anagram(s1, s2) {
  n1 = s1.length
  n2 = s2.length
  if (n1 != n2) {
    return false
  } else {
    s1.sort
    s2.sort
    for (let i = 0; i < n1; i++) {
      if (s1[i] != s2[i]) break
    }
  }
  return `Yes ${s1} and ${s2} are anagram`
}

console.log(anagram('listen', 'silent'))

// 8
function replaceWord(s1, w, rep) {
  str = ''
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == w) {
      str += rep
    } else {
      str += s1[i]
    }
  }
  return str
}
console.log(replaceWord('hello', 'l', 'e'))

// 9
function turncate(s1, maxlen) {
  len = s1.length
  if (len <= maxlen) {
    return s1
  } else {
    return s1.slice(0, maxlen) + '...'
  }
}
console.log(turncate('Hi How are you  doing', 6))

//10
function isnum(s1) {
  for (let i = 0; i < s1.length; i++) {
    var ascii = s1.charCodeAt(i)
    if (ascii < 48 || ascii > 57) {
      return false
    }
  }
  return true
}
console.log(isnum('123'))
