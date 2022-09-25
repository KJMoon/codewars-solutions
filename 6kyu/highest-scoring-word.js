// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My solution

function high(x){    
  let words = x.split(' ')
  let highestScore = 0
  let highestScoreWord = ''
  
  for(let i = 0; i < words.length; i++){
    let currentWord = words[i]
    let currentScore = 0
    
    for(let j = 0; j < currentWord.length; j++){
        currentScore += (currentWord.charCodeAt(j) - 96)
    }
    if(currentScore > highestScore){
        highestScore = currentScore
        highestScoreWord = currentWord
    }
  }

  return highestScoreWord
}

// Another solution

// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }