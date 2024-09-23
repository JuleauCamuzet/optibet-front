import React from 'react'

import { Wrapper } from './styles'
import { LoadingSquare } from '../../../components/LoadingSquare'

export const TabBodyLoading = () => {
  const loadingRows = []

  for (let i = 0; i < 10; i++) {
    loadingRows.push(
      <LoadingSquare key={Math.random()} width="100%" height="38.5px" />
    )
  }

  return <Wrapper>{loadingRows}</Wrapper>
}
