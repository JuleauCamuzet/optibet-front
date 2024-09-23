import { BackendUrl } from '../../constants/urls'
import { ApiError, checkIfApiError } from '../types/apiError'
import { Bet, checkIfBetArray } from '../types/bets'

export const getBetsFromApi = async (): Promise<Bet[] | ApiError> => {
  try {
    const url = `${BackendUrl}/bets`

    const response = await (await fetch(url)).json()

    if (checkIfBetArray(response) || checkIfApiError(response)) {
      return response
    } else {
      return {
        code: 'UNKNOWN',
        message: 'An unknown error has occured.',
      }
    }
  } catch (error) {
    console.error(error)
    return {
      code: 'UNKNOWN',
      message: 'An unknown error has occured.',
    }
  }
}
