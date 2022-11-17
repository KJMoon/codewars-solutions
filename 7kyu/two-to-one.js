// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution

function longest(s1, s2) {
    let sorted = [...s1, ...s2].sort();
    let newString = '';
    
    sorted.forEach(char => {
        if(!newString.includes(char)){
            newString += char;
        }
    });
    
    return newString;
}

// Another solution

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')