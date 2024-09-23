import React, { useEffect, useState } from 'react'

import { DashboardContent } from '../Content'
import { DashboardMove } from '../types'
import { getDashboardMovesFromApi } from '../../../api/queries/pages/dashboard/getDashboardMoves'
import { checkIfApiError } from '../../../api/types/apiError'
import { DropdownPropsType } from '../../../components/Dropdown'
import { Sport } from '../../../api/types/sports'
import { Region } from '../../../api/types/regions'
import { getSportsFromApi } from '../../../api/queries/getSports'
import { getRegionsFromApi } from '../../../api/queries/getRegions'

export const Dashboard = () => {
  const [dashboardMoves, setDashboardMoves] = useState<DashboardMove[] | null>(
    null
  )
  const [filtersLoading, setFiltersLoading] = useState(true)
  const [movesLoading, setMovesLoading] = useState(true)
  const [sports, setSports] = useState<Sport[] | null>(null)
  const [regions, setRegions] = useState<Region[] | null>(null)
  const [regionFilter, setRegionFilter] = useState('all')
  const [sportFilter, setSportFilter] = useState('all')
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [dashboardMovesError, setDashboardMovesError] = useState('')

  useEffect(() => {
    getAndSetDashboardMovesData()
  }, [])

  useEffect(() => {
    if (!isFirstRender) {
      getAndSetDashboardMoves()
    }
  }, [regionFilter])

  useEffect(() => {
    if (!isFirstRender) {
      getAndSetDashboardMoves()
    }
  }, [sportFilter])

  useEffect(() => {
    if (sports && regions && filtersLoading) {
      setFiltersLoading(false)
    }
  }, [sports, regions])

  useEffect(() => {
    if (dashboardMoves && movesLoading) {
      setMovesLoading(false)
    }
  }, [dashboardMoves])

  const getAndSetDashboardMoves = async () => {
    if (!movesLoading) {
      setMovesLoading(true)
    }

    const response = await getDashboardMovesFromApi(sportFilter, regionFilter)

    if (checkIfApiError(response)) {
      setDashboardMovesError(response.message)
      return
    }

    setDashboardMoves(response)
    setIsFirstRender(false)
  }

  const getAndSetSports = async () => {
    if (!filtersLoading) {
      setFiltersLoading(true)
    }

    const response = await getSportsFromApi()

    if (checkIfApiError(response)) {
      setDashboardMovesError(response.message)
      return
    }

    setSports(response)
  }

  const getAndSetRegions = async () => {
    if (!filtersLoading) {
      setFiltersLoading(true)
    }

    const response = await getRegionsFromApi()

    if (checkIfApiError(response)) {
      setDashboardMovesError(response.message)
      return
    }

    setRegions(response)
  }

  const getAndSetDashboardMovesData = () => {
    getAndSetDashboardMoves()
    getAndSetSports()
    getAndSetRegions()
  }

  const dropdownFilterSportData: DropdownPropsType | null = sports
    ? {
        selectedItemId: sportFilter,
        items: [
          {
            label: 'Tous les sports',
            id: 'all',
          },
          ...sports.map((sport) => {
            return {
              label: sport.name,
              id: sport.id,
            }
          }),
        ],
        handleItemClick: (itemId) => {
          setSportFilter(itemId)
        },
      }
    : null

  const dropdownFilterRegionData: DropdownPropsType | null = regions
    ? {
        selectedItemId: regionFilter,
        items: [
          {
            label: 'Toutes les régions',
            id: 'all',
          },
          ...regions.map((region) => {
            return {
              label: region.name,
              id: region.key,
            }
          }),
        ],
        handleItemClick: (itemId) => {
          setRegionFilter(itemId)
        },
      }
    : null

  return (
    <DashboardContent
      dashboardMoves={dashboardMoves}
      dashboardMovesError={dashboardMovesError}
      getAndSetDashboardMoves={getAndSetDashboardMoves}
      sportFilterData={dropdownFilterSportData}
      regionFilterData={dropdownFilterRegionData}
      filtersLoading={filtersLoading}
      movesLoading={movesLoading}
    />
  )
}
