/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert both strings to lowercase
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Convert strings to arrays of characters
  const charArray1 = lowerStr1.split('');
  const charArray2 = lowerStr2.split('');

  // Sort arrays
  charArray1.sort();
  charArray2.sort();

  // Compare sorted arrays
  return JSON.stringify(charArray1) === JSON.stringify(charArray2);
}

module.exports = isAnagram;
