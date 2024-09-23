import { BackendUrl } from '../../constants/urls'
import { ApiError, checkIfApiError } from '../types/apiError'
import { Bookmaker, checkIfBookmakerArray } from '../types/bookmakers'

export const getBookmakersFromApi = async (): Promise<
  Bookmaker[] | ApiError
> => {
  try {
    const url = `${BackendUrl}/bookmakers`

    const response = await (await fetch(url)).json()

    if (checkIfBookmakerArray(response) || checkIfApiError(response)) {
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
