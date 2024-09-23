import React, { CSSProperties, ReactNode } from 'react'

import { Colors } from '../../constants/colors'
import { FontSizes } from '../../constants/fontSizes'
import { Wrapper } from './styles'

type PropsType = {
  color: Colors
  size: FontSizes
  children: ReactNode
  style?: CSSProperties
}

export const DefaultText = ({ color, size, children, style }: PropsType) => {
  return (
    <Wrapper style={style} color={color} size={size}>
      {children}
    </Wrapper>
  )
}
