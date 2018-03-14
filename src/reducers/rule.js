import {LETTER_GUESS}  from '../actions/guessletter'
import {NEW_GAME}  from '../actions/guessletter'


var guesses = []
var word=randomWord()

var game = {
  word: word,
  guesses: guesses,
  wordToShow: showGuess(word, guesses),
  isWinner:false,
  gameOver:false  }



export default (state = game, { type, payload } = {}) => {
  switch(type) {
    case LETTER_GUESS :
      let secondState = Object.assign({}, state)
      secondState.guesses = secondState.guesses.concat(payload)
      secondState.wordToShow = showGuess(secondState.word, secondState.guesses)
      secondState.wrongGuessCount = wrongGuessCount(secondState.word, secondState.guesses)
      secondState.isWinner = isWinner(secondState.word, secondState.guesses)
      secondState.gameOver = secondState.wrongGuessCount > 6
      return secondState
    case NEW_GAME:
      let thirdState = Object.assign({}, state)
      thirdState.word = randomWord()
      thirdState.guesses=[]
      thirdState.wordToShow = showGuess(thirdState.word, thirdState.guesses)
      thirdState.wrongGuessCount = wrongGuessCount(thirdState.word, thirdState.guesses)
      thirdState.isWinner = isWinner(thirdState.word, thirdState.guesses)
      thirdState.gameOver = thirdState.wrongGuessCount > 6
      return thirdState

     default : return state
  }
}

function showGuess(word, guesses) {
  return word
  .split('')
  .map(char => (guesses.includes(char)? char: ' □ '))
  .join(' ')

}

function wrongGuessCount(word, guesses) {
return guesses
  .filter(guess=> word.indexOf(guess) === -1)
  .length
}


function isWinner(word, guesses) {
  return word
  .split('')
  .join(' ')===showGuess(word,guesses)
  ;}

function randomWord(){
   let allwords = require('word-list-json');
   let word=allwords[Math.floor(Math.random() * allwords.length)]
return word  }
