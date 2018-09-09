import player from './player'
import pointWonBy from './pointWonBy'
import score from './score'

const match = (player1: string, player2: string) => {
  const players = [player(player1), player(player2)]

  return {
    pointWonBy: pointWonBy(players),
    score: score(players),
  }
}

export default match
