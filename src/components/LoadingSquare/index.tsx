import React from 'react'

import { Wrapper } from './styles'

type PropsType = {
  width?: string
  height?: string
}

export const LoadingSquare = ({ width, height }: PropsType) => {
  return <Wrapper width={width} height={height} />
}
