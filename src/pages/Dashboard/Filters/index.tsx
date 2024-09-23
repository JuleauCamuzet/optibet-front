import React from 'react'

import { Dropdown, DropdownPropsType } from '../../../components/Dropdown'
import { Wrapper } from './styles'
import { LoadingSquare } from '../../../components/LoadingSquare'

type PropsType = {
  sportFilter: DropdownPropsType | null
  regionFilter: DropdownPropsType | null
  loading: boolean
}

export const DashboardFilters = ({
  sportFilter,
  regionFilter,
  loading,
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
      </Wrapper>
    )
  }
}
