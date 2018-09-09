import { Player } from './player'

interface ScoreTable {
  [key: number]: number
}

const pointToScore = (point: number): number => {
  const scoreTable: ScoreTable = {
    1: 15,
    2: 30,
    3: 40,
  }
  return scoreTable[point] || point
}

const score = (players: Player[]) => () => {
  const games = players.map(p => p.getGamesWon())
  const points = players.map(p => p.getPoints())
  const hasPoints = points.every(p => p > 0)
  const isDeuce = points.every(p => p >= 3 && p === points[0])
  const hasAdvantage =
    points.every(p => p >= 3) &&
    points.some(p => p >= 4) &&
    players.reduce((acc: Player | null, curr) => {
      if (!acc || curr.getPoints() - acc.getPoints() === 1) {
        return curr
      }
      return acc
    }, null)
  const scores = points.map(pointToScore).join('-')
  const [p1Games, p2Games] = games
  const isSet =
    games.some(p => p === 7) ||
    (games.some(p => p >= 6) &&
      (p1Games - p2Games > 1 || p2Games - p1Games > 1))
  const finalScore = isSet
    ? 'Set'
    : hasAdvantage
      ? `Advantage ${hasAdvantage.getName()}`
      : isDeuce
        ? 'Deuce'
        : scores
  return `${games.join('-')}${hasPoints || isSet ? `, ${finalScore}` : ''}`
}

export default score
