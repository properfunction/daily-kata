// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  // an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u']
  // vowelCount
  let vowelCount = 0
  // loop through char in string and check if they are a vowel
  for(let char of str){
    // if char in string is a vowel, vowelCount++
    if(vowels.includes(char)){
      vowelCount++
    }
  }
  
  // return vowelCount
  return vowelCount
  
}

// parameters: str -  lowercase letters and/or spaces
// return the number (count) of vowels - return num

// 'david' -> 'a', 'i' -> 2
// 'house' -> 'o', 'u', 'e' -> 3
// 'myth' -> 0

// console.log(getCount('david') '2')
// console.log(getCount('house') '3')
// console.log(getCount('myth') '0')