// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My solution

function isIsogram(str){
    let newStr = ''
    
    for(let i = 0; i < str.length; i++){
      if(!newStr.includes(str[i].toLowerCase())){
        newStr += str[i]
      }
    }
    return str === newStr
}

// Another solution

// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i)
//       for(j = i + 1; j < str.length; ++j)
//         if(str[i] === str[j])
//           return false;
//     return true;
// }