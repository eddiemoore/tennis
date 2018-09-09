import { Player } from './player'

const pointWonBy = (players: Player[]) => (name: string) => {
  const winner = players.find(p => p.getName() === name) as Player
  const loser = players.find(p => p.getName() !== name) as Player

  const winnerGames = winner.getGamesWon()
  const loserGames = loser.getGamesWon()

  // Only do one set
  if (winnerGames === 7) {
    return
  }

  const winnerPoints = winner.addPoint()
  const loserPoints = loser.getPoints()

  // Tie breaker
  if (
    winnerGames >= 6 &&
    loserGames === 6 &&
    winnerPoints >= 7 &&
    winnerPoints - loserPoints > 1
  ) {
    // Game over
    winner.wonGame()
    loser.lostGame()
    return
  }

  if (winnerPoints >= 4 && winnerPoints - loserPoints > 1) {
    // Game over
    winner.wonGame()
    loser.lostGame()
  }
}

export default pointWonBy
