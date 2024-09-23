import React from 'react'

import { CalculButtonContainer, Wrapper } from './styles'
import { TabColumn, TabData, TabRow } from '../../../templates/Tab/types'
import { Tab } from '../../../templates/Tab'
import { Button } from '../../../components/Button'
import { DefaultText } from '../../../components/DefaultText'
import { FontSizes } from '../../../constants/fontSizes'
import { Colors } from '../../../constants/colors'
import { DashboardMove } from '../types'
import { DropdownPropsType } from '../../../components/Dropdown'
import { DashboardFilters } from '../Filters'
import { FontWeights } from '../../../constants/fontWeights'

type PropsType = {
  dashboardMoves: DashboardMove[] | null
  dashboardMovesError: string
  sportFilterData: DropdownPropsType | null
  regionFilterData: DropdownPropsType | null
  getAndSetDashboardMoves: () => void
  filtersLoading: boolean
  movesLoading: boolean
}

export const DashboardContent = ({
  dashboardMoves,
  dashboardMovesError,
  getAndSetDashboardMoves,
  sportFilterData,
  regionFilterData,
  movesLoading,
  filtersLoading,
}: PropsType) => {
  const tabDataColumns: TabColumn[] = [
    {
      id: 'sport',
      label: 'Sport',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'league',
      label: 'Ligue',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'betA',
      label: 'Pari A',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'betB',
      label: 'Pari B',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'benefits',
      label: 'Gains (%)',
      sortable: true,
      valueType: 'number',
    },
    {
      id: 'calculButton',
      label: '',
      sortable: false,
      valueType: 'element',
    },
  ]

  const tabDataRows: TabRow[] | null = dashboardMoves
    ? dashboardMoves.map((moveData) => {
        return {
          id: moveData.id,
          values: [
            {
              displayValue: moveData.sport.name,
              sortValue: moveData.sport.name,
            },
            {
              displayValue: moveData.league.name,
              sortValue: moveData.league.name,
            },
            {
              displayValue: `${moveData.betA.teamName} / ${moveData.betA.odd} / ${moveData.betA.bookmaker.name}`,
              sortValue: moveData.betA.odd,
            },
            {
              displayValue: `${moveData.betB.teamName} / ${moveData.betB.odd} / ${moveData.betB.bookmaker.name}`,
              sortValue: moveData.betB.odd,
            },
            {
              displayValue: `${moveData.benefits}`,
              sortValue: moveData.benefits,
            },
            {
              displayValue: (
                <CalculButtonContainer>
                  <Button
                    size="small"
                    type="primary"
                    handleClick={() => alert('clicked')}
                    label="Calculer"
                  />
                </CalculButtonContainer>
              ),
              sortValue: '',
            },
          ],
        }
      })
    : null

  const tabData: TabData | null =
    tabDataColumns && tabDataRows
      ? { columns: tabDataColumns, rows: tabDataRows }
      : null

  return (
    <Wrapper>
      <DefaultText
        style={{ fontWeight: FontWeights.BIG, background: Colors.PRIMARY, padding: '16px 32px', borderRadius: '20px', width: 'fit-content' }}
        size={FontSizes.HUGE}
        color={Colors.WHITE}
      >
        Welcome to Optibets
      </DefaultText>
      <DashboardFilters
        sportFilter={sportFilterData}
        regionFilter={regionFilterData}
        loading={filtersLoading}
      />
      <Tab
        tabData={tabData}
        handleRetry={getAndSetDashboardMoves}
        error={dashboardMovesError}
        loading={movesLoading}
      />
    </Wrapper>
  )
}
