import { BackendUrl } from '../../constants/urls'
import { ApiError, checkIfApiError } from '../types/apiError'
import { checkIfSportArray, Sport } from '../types/sports'

export const getSportsFromApi = async (): Promise<Sport[] | ApiError> => {
  try {
    const url = `${BackendUrl}/sports`

    const response = await (await fetch(url)).json()

    if (checkIfSportArray(response) || checkIfApiError(response)) {
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
