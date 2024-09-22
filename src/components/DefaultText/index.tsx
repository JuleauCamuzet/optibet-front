import React, { ReactNode } from 'react'

import { Colors } from '../../constants/colors'
import { FontSizes } from '../../constants/fontSizes'
import { Wrapper } from './styles'

type PropsType = {
  color: Colors
  size: FontSizes
  children: ReactNode
}

export const DefaultText = ({ color, size, children }: PropsType) => {
  return (
    <Wrapper color={color} size={size}>
      {children}
    </Wrapper>
  )
}
