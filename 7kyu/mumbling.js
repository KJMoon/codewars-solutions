// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// My solution

function accum(s){
    let newStr = ''
    
    for(let i = 0; i < s.length; i++){
      newStr = newStr + s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-'
    }
    
    return newStr.slice(0, -1)
}

// Another solution

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }