import { BackendUrl } from '../../constants/urls'
import { ApiError, checkIfApiError } from '../types/apiError'
import { checkIfLeagueArray, League } from '../types/leagues'

export const getLeaguesFromApi = async (): Promise<League[] | ApiError> => {
  try {
    const url = `${BackendUrl}/leagues`

    const response = await (await fetch(url)).json()

    if (checkIfLeagueArray(response) || checkIfApiError(response)) {
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
