import { BackendUrl } from '../../constants/urls'
import { ApiError, checkIfApiError } from '../types/apiError'
import { checkIfMoveArray, Move } from '../types/moves'

export const getMovesFromApi = async (): Promise<Move[] | ApiError> => {
  try {
    const url = `${BackendUrl}/moves`

    const response = await (await fetch(url)).json()

    if (checkIfMoveArray(response) || checkIfApiError(response)) {
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
