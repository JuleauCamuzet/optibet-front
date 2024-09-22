import React from 'react'

import { Wrapper } from './style'
import { ButtonSize, ButtonType } from './types'
import { DefaultText } from '../DefaultText'
import { FontSizes } from '../../constants/fontSizes'
import { Colors } from '../../constants/colors'

type PropsType = {
  type: ButtonType
  label: string
  handleClick: () => void
  size: ButtonSize
}

export const Button = ({ type, size, label, handleClick }: PropsType) => {
  return (
    <Wrapper onClick={handleClick} type={type} size={size}>
      <DefaultText
        size={
          size === 'big'
            ? FontSizes.BIG
            : size === 'medium'
              ? FontSizes.SMALL
              : FontSizes.TINY
        }
        color={Colors.WHITE}
      >
        {label}
      </DefaultText>
    </Wrapper>
  )
}
