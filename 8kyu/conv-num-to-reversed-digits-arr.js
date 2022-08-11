// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//My solution
// function digitize(n) {
//     let numToString = n.toString()
    
//     let numArr = []
    
//     for(let i = 0; i < numToString.length; i++){
//       numArr[i] = Number(numToString[i])
//     }
    
//     return numArr.reverse()
//   }

//Better solution
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}