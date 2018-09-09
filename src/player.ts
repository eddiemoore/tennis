export interface Player {
  addPoint: () => number
  getGamesWon: () => number
  getName: () => string
  getPoints: () => number
  lostGame: () => void
  wonGame: () => void
}

const player = (name: string): Player => {
  let points = 0
  let gamesWon = 0

  const addPoint = () => (points += 1)

  const wonGame = () => {
    gamesWon += 1
    points = 0
  }

  const lostGame = () => (points = 0)

  return {
    addPoint,
    getGamesWon: () => gamesWon,
    getName: () => name,
    getPoints: () => points,
    lostGame,
    wonGame,
  }
}

export default player
