import { WINNER_COMBOS } from './constants'

export const checkWinner = (boardToCheck) => {
	// resisamos todas la combinaciones para saber quien gana
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo

		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a]
		}
	}

	// si no hay ganador
	return null
}

export const checkEndGame = (newBoard) => {
	// revisar si hay un empate
	return newBoard.every((square) => square !== null)
}
