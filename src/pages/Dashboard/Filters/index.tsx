import React from 'react'

import { Dropdown, DropdownPropsType } from '../../../components/Dropdown'
import { FiltersContainer, Wrapper } from './styles'
import { LoadingSquare } from '../../../components/LoadingSquare'
import { SwitchViews } from '../SwitchViews'

type PropsType = {
  sportFilter: DropdownPropsType | null
  regionFilter: DropdownPropsType | null
  loading: boolean
  viewType: 'tab' | 'grid'
  setViewType: (v: 'tab' | 'grid') => void
}

export const DashboardFilters = ({
  sportFilter,
  regionFilter,
  loading,
  viewType,
  setViewType,
}: PropsType) => {
  if (loading) {
    return (
      <Wrapper>
        <LoadingSquare width="200px" height="42px" />
        <LoadingSquare width="200px" height="42px" />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <FiltersContainer>
          {sportFilter && (
            <Dropdown
              selectedItemId={sportFilter.selectedItemId}
              handleItemClick={sportFilter.handleItemClick}
              items={sportFilter.items}
            />
          )}
          {regionFilter && (
            <Dropdown
              selectedItemId={regionFilter.selectedItemId}
              handleItemClick={regionFilter.handleItemClick}
              items={regionFilter.items}
            />
          )}
        </FiltersContainer>
        <SwitchViews viewType={viewType} setViewType={setViewType} />
      </Wrapper>
    )
  }
}
