export type Move = {
  id: string
  date: string
  bet_a_id: string
  bet_b_id: string
  benefits: string
  league_id: string
}

export const checkIfMove = (val: any): val is Move => {
  return (
    val &&
    typeof val.id === 'string' &&
    typeof val.date === 'string' &&
    typeof val.bet_a_id === 'string' &&
    typeof val.bet_b_id === 'string' &&
    typeof val.benefits === 'string' &&
    typeof val.league_id === 'string'
  )
}

export const checkIfMoveArray = (val: any): val is Move[] => {
  return Array.isArray(val) && val.every((element) => checkIfMove(element))
}
