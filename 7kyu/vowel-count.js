// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = 'aeiou';
    let count = 0;

    str.split('').forEach( char => {
        if(vowels.includes(char)){
        count += 1;
        }
    });

    return count;
}

// Another solution
// function getCount(str) {
//     let vowels = 'aeiou';
//     let strToArr = str.split('')
//     return strToArr.filter(char => vowels.includes(char)).length
// }