import React from 'react'

import { SwitchButton, Wrapper } from './styles'
import { GridIcon } from '../../../components/icons/Grid'
import { ListIcon } from '../../../components/icons/List'
import { Colors } from '../../../constants/colors'

type PropsType = {
  viewType: 'tab' | 'grid'
  setViewType: (v: 'tab' | 'grid') => void
}

export const SwitchViews = ({ viewType, setViewType }: PropsType) => {
  const handleSelectTabView = () => {
    if (viewType !== 'tab') {
      setViewType('tab')
    }
  }

  const handleSelectGridView = () => {
    if (viewType !== 'grid') {
      setViewType('grid')
    }
  }

  return (
    <Wrapper>
      <SwitchButton onClick={handleSelectGridView} toggle={viewType === 'grid'}>
        <GridIcon color={Colors.PRIMARY} />
      </SwitchButton>
      <SwitchButton onClick={handleSelectTabView} toggle={viewType === 'tab'}>
        <ListIcon color={Colors.PRIMARY} />
      </SwitchButton>
    </Wrapper>
  )
}
