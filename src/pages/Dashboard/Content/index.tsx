import React from 'react'

import { Wrapper } from './styles'
import { TabColumn, TabData, TabRow } from '../../../templates/Tab/types'
import { Tab } from '../../../templates/Tab'
import { DefaultText } from '../../../components/DefaultText'
import { FontSizes } from '../../../constants/fontSizes'
import { Colors } from '../../../constants/colors'
import { DashboardMove } from '../types'
import { DropdownPropsType } from '../../../components/Dropdown'
import { DashboardFilters } from '../Filters'
import { FontWeights } from '../../../constants/fontWeights'
import { BoxsGrid } from '../../../templates/BoxsGrid'
import { BorderRadius } from '../../../constants/borderRadius'
import { DashboardMoveSquare } from '../MoveSquare'
import { BoxsGridItemsData } from '../../../templates/BoxsGrid/types'

type PropsType = {
  dashboardMoves: DashboardMove[] | null
  dashboardMovesError: string
  sportFilterData: DropdownPropsType | null
  regionFilterData: DropdownPropsType | null
  getAndSetDashboardMoves: () => void
  filtersLoading: boolean
  movesLoading: boolean
  viewType: 'grid' | 'tab'
  setViewType: (v: 'tab' | 'grid') => void
}

export const DashboardContent = ({
  dashboardMoves,
  dashboardMovesError,
  getAndSetDashboardMoves,
  sportFilterData,
  regionFilterData,
  movesLoading,
  filtersLoading,
  viewType,
  setViewType,
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
      label: 'League',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'betA',
      label: 'Bet A',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'betB',
      label: 'Bet B',
      sortable: true,
      valueType: 'string',
    },
    {
      id: 'benefits',
      label: 'Benefits',
      sortable: true,
      valueType: 'number',
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
              displayValue: `${moveData.benefits}%`,
              sortValue: moveData.benefits,
            },
          ],
        }
      })
    : null

  const tabData: TabData | null =
    tabDataColumns && tabDataRows
      ? { columns: tabDataColumns, rows: tabDataRows }
      : null

  const boxsGridData: BoxsGridItemsData | null = dashboardMoves
    ? {
        attributes: [
          {
            id: 'sport',
            name: 'Sport',
            sortable: true,
            valueType: 'string',
          },
          {
            id: 'league',
            name: 'League',
            sortable: true,
            valueType: 'string',
          },
          {
            id: 'oddA',
            name: 'Odd A',
            sortable: true,
            valueType: 'number',
          },
          {
            id: 'oddB',
            name: 'Odd B',
            sortable: true,
            valueType: 'number',
          },
          {
            id: 'benefits',
            name: 'Gains (%)',
            sortable: true,
            valueType: 'number',
          },
          {
            id: 'region',
            name: 'Region',
            sortable: true,
            valueType: 'string',
          },
        ],
        items: dashboardMoves.map((move) => {
          return {
            id: move.id,
            sortingValues: [
              {
                attributeId: 'sport',
                value: move.sport.name,
              },
              {
                attributeId: 'league',
                value: move.league.name,
              },
              {
                attributeId: 'oddA',
                value: move.betA.odd,
              },
              {
                attributeId: 'oddB',
                value: move.betB.odd,
              },
              {
                attributeId: 'benefits',
                value: move.benefits,
              },
              {
                attributeId: 'region',
                value: move.region.name,
              },
            ],
            content: (
              <DashboardMoveSquare
                benefits={move.benefits}
                bookmakerA={move.betA.bookmaker.name}
                bookmakerB={move.betB.bookmaker.name}
                league={move.league.name}
                oddA={move.betA.odd}
                oddB={move.betB.odd}
                region={move.region.name}
                sport={move.sport.name}
                teamA={move.betA.teamName}
                teamB={move.betB.teamName}
              />
            ),
          }
        }),
      }
    : null

  return (
    <Wrapper>
      <DefaultText
        style={{
          fontWeight: FontWeights.BIG,
          background: Colors.LIGHT,
          border: `solid ${Colors.TERTIARY} 1px`,
          padding: '16px 32px',
          borderRadius: BorderRadius.NORMAL,
          width: 'fit-content',
        }}
        size={FontSizes.HUGE}
        color={Colors.PRIMARY}
      >
        Welcome to Optibets
      </DefaultText>
      <DashboardFilters
        sportFilter={sportFilterData}
        regionFilter={regionFilterData}
        loading={filtersLoading}
        viewType={viewType}
        setViewType={setViewType}
      />
      {viewType === 'tab' ? (
        <Tab
          tabData={tabData}
          handleRetry={getAndSetDashboardMoves}
          error={dashboardMovesError}
          loading={movesLoading}
        />
      ) : (
        <BoxsGrid itemsData={boxsGridData} loading={movesLoading} />
      )}
    </Wrapper>
  )
}
