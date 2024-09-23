type DashboardBookmaker = {
  id: string
  name: string
}

type DashboardBet = {
  id: string
  odd: number
  teamName: string
  bookmaker: DashboardBookmaker
}

type DashboardRegion = {
  id: string
  name: string
}

type DashboardLeague = {
  id: string
  name: string
}

type DashboardSport = {
  id: string
  name: string
}

export type DashboardMove = {
  id: string
  benefits: number
  region: DashboardRegion
  betA: DashboardBet
  betB: DashboardBet
  league: DashboardLeague
  sport: DashboardSport
}

const checkIfDashboardBookmaker = (
  bookmaker: any
): bookmaker is DashboardBookmaker => {
  return (
    typeof bookmaker === 'object' &&
    typeof bookmaker.id === 'string' &&
    typeof bookmaker.name === 'string'
  )
}

const checkIfDashboardBet = (bet: any): bet is DashboardBet => {
  return (
    typeof bet === 'object' &&
    typeof bet.id === 'string' &&
    typeof bet.odd === 'number' &&
    typeof bet.teamName === 'string' &&
    checkIfDashboardBookmaker(bet.bookmaker)
  )
}

// Checker for DashboardRegion
const checkIfDashboardRegion = (region: any): region is DashboardRegion => {
  return (
    typeof region === 'object' &&
    typeof region.id === 'string' &&
    typeof region.name === 'string'
  )
}

const checkIfDashboardLeague = (league: any): league is DashboardLeague => {
  return (
    typeof league === 'object' &&
    typeof league.id === 'string' &&
    typeof league.name === 'string'
  )
}

const checkIfDashboardSport = (sport: any): sport is DashboardSport => {
  return (
    typeof sport === 'object' &&
    typeof sport.id === 'string' &&
    typeof sport.name === 'string'
  )
}

const checkIfDashboardMove = (move: any): move is DashboardMove => {
  return (
    typeof move === 'object' &&
    typeof move.id === 'string' &&
    typeof move.benefits === 'number' &&
    checkIfDashboardRegion(move.region) &&
    checkIfDashboardBet(move.betA) &&
    checkIfDashboardBet(move.betB) &&
    checkIfDashboardLeague(move.league) &&
    checkIfDashboardSport(move.sport)
  )
}

export const checkIfDashboardMoveArray = (val: any): val is DashboardMove[] => {
  return Array.isArray(val) && val.every((el) => checkIfDashboardMove(el))
}
