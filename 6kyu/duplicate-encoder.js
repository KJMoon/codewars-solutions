// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My solution

function duplicateEncode(word){
    let newStr = ''
    let count = {}
    
    for(char of word){
      if(count[char.toLowerCase()]){
        count[char.toLowerCase()] += 1
      }else{
        count[char.toLowerCase()] = 1
      }
    }
    
    for(char of word){
      count[char.toLowerCase()] === 1 ? newStr += '(' : newStr += ')'
    }
    
    return newStr
}

// Another solution

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
}