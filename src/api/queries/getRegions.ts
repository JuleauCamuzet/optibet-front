import { BackendUrl } from '../../constants/urls'
import { ApiError, checkIfApiError } from '../types/apiError'
import { checkIfRegionArray, Region } from '../types/regions'

export const getRegionsFromApi = async (): Promise<Region[] | ApiError> => {
  try {
    const url = `${BackendUrl}/regions`

    const response = await (await fetch(url)).json()

    if (checkIfRegionArray(response) || checkIfApiError(response)) {
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
