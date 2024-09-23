import { BackendUrl } from '../../../../constants/urls'
import { DashboardMove } from '../../../../pages/Dashboard/types'
import { ApiError, checkIfApiError } from '../../../types/apiError'
import { checkIfDashboardMoveArray } from '../../../types/pages/dashboard/dashboardMoves'

export const getDashboardMovesFromApi = async (
  sportFilter: string,
  regionFilter: string
): Promise<DashboardMove[] | ApiError> => {
  try {
    const url = `${BackendUrl}/pages/dashboard/moves?sport=${sportFilter}&region=${regionFilter}`

    const response = await (await fetch(url)).json()

    if (checkIfDashboardMoveArray(response) || checkIfApiError(response)) {
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
