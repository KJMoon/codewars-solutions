// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// My solution

function bmi(weight, height) {
    let index = parseFloat(weight / (height**2));
    
    if(index > 30){
      return "Obese";
    }else if(index <= 30.0 && index > 25.0){
      return "Overweight";
    }else if(index <= 25.0 && index > 18.5){
      return "Normal";
    }else if(index <= 18.5){
      return "Underweight";
    }
}

// Another solution

// function bmi(weight, height) {
//     var result = weight/Math.pow(height,2) 
    
//     if (result <= 18.5) {
//       return "Underweight";
//     } else if (result <= 25) {
//       return "Normal";
//     } else if (result <= 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
    
// }