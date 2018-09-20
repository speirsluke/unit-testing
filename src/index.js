function add(a, b){
  return a + b;
}

exports.add = add;

function longestString(arr) {
let max = 0;
let wordLengths = arr.map(function(word){
  return word.length;
})
wordLengths.map(function(number){
  if (number > max) {
    max = number;
  }
 return max;
})
return arr[wordLengths.indexOf(max)]; 
}

exports.longestString = longestString;

function replaceLetter(string) {
  
let stringArray = Array.from(string); 
let newStringArray = stringArray.map(function(letter){
  if ((letter == 'i') || (letter == 'l')) {
    letter = '1'
    return letter
  } else if (letter == 'z') {
    letter = '2';
    return letter
  } else if (letter == 'e') {
    letter = '3'
    return letter
  } else if (letter == 'a') {
    letter = '4'
    return letter
  } else if (letter == 's') {
    letter = '5'
    return letter
  } else if (letter == 'g') {
    letter = '6'
    return letter
  } else if ((letter == 't') || (letter == 'y')) {
    letter = '7'
    return letter
  }  else if (letter == 'b') {
    letter = '8'
    return letter
  }  else if (letter == 'q') {
    letter = '9'
    return letter
  } else if (letter == 'o') {
    letter = '0'
    return letter
  } else {
  return letter 
  }
})

  return newStringArray.join('')
}

exports.replaceLetter = replaceLetter;

function uniqueArray(array) {
let newArray = [];
  array.forEach(function(word){
  if (newArray.indexOf(word) === -1){
    newArray.push(word)
  }
})
return newArray;
}

exports.uniqueArray = uniqueArray;


function Developer(name, language){
this.name = name;
this.language = language;
}





const newLang = {
language: [],
learnLanguage(newLanguage) {
  if (this.language.indexOf(newLanguage) === -1) {
    this.language.push(newLanguage);
  }
}
}

Developer.prototype = newLang;
exports.Developer = Developer;
exports.newLang = newLang; 
exports.newLang.learnLanguage = learnLanguage;




