// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution

function XO(str) {
    let count = {}
    
    for(char of str){
      if(count[char]){
        count[char.toLowerCase()] += 1
      }else{
        count[char.toLowerCase()] = 1
      }
    }
    
    return count['x'] === count['o'] ? true : false
}

// Another solution

// const XO = str => {
//     str = str.toLowerCase().split('');
//     return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }