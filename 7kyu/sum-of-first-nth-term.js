// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//My solution

function SeriesSum(n){
    let sum = 0;
    let seriesDenominator = 1;
    
    for(let i = 0; i < n; i++){
        if(i === 0){
            sum = 1;
        }else{
            seriesDenominator += 3;
            sum += (1 / seriesDenominator);
        }
    };
    
    return sum.toFixed(2);
}

//Another solution

// function SeriesSum(n) {
//     for (var s = 0, i = 0; i < n; i++) {
//         s += 1 / (1 + i * 3)
//     }
    
//     return s.toFixed(2)
// }