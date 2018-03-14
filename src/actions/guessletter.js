export const LETTER_GUESS = 'LETTER_GUESS'
export const NEW_GAME = 'NEW_GAME'

export default (letter) => {
  return {
    type: LETTER_GUESS,
    payload: letter
  }
}

export const newGame = () => ({
  type: NEW_GAME,
  payload: {
  }
})
