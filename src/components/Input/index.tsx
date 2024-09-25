import React, { ChangeEvent } from 'react'

import { Container, StyledInput, Wrapper } from './styles'
import { DefaultText } from '../DefaultText'
import { FontSizes } from '../../constants/fontSizes'
import { Colors } from '../../constants/colors'

type PropsType = {
  value: string
  label?: string
  type: 'text' | 'number' | 'password'
  error?: string
  disabled?: boolean
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  value,
  label,
  type,
  error,
  handleChange,
}: PropsType) => {
  return (
    <Wrapper>
      {label && (
        <DefaultText size={FontSizes.TINY} color={Colors.PRIMARY}>
          {label}
        </DefaultText>
      )}
      <Container>
        <StyledInput onChange={handleChange} type={type} value={value} />
      </Container>
      {error && (
        <DefaultText size={FontSizes.TINY} color={Colors.RED}>
          {error}
        </DefaultText>
      )}
    </Wrapper>
  )
}
