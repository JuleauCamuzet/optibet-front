import React, { ChangeEvent } from 'react'

import { BetSecondColumn } from '../styles'
import { DefaultText } from '../../../../components/DefaultText'
import { Colors } from '../../../../constants/colors'
import { FontSizes } from '../../../../constants/fontSizes'
import { FontWeights } from '../../../../constants/fontWeights'
import { Input } from '../../../../components/Input'

type PropsType = {
  odd: number
  team: string
  bookmaker: string
  inputBetAmount: number | null
  inputBetError: string
  handleBetInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const BetSquareSecondColumn = ({
  odd,
  team,
  bookmaker,
  handleBetInputChange,
  inputBetAmount,
  inputBetError,
}: PropsType) => {
  return (
    <BetSecondColumn>
      <DefaultText
        style={{ marginBottom: '4px', fontWeight: FontWeights.MEDIUM }}
        color={Colors.PRIMARY}
        size={FontSizes.SMALL}
      >
        Team B :
      </DefaultText>
      <DefaultText
        style={{ marginBottom: '12px' }}
        color={Colors.BLACK}
        size={FontSizes.SMALL}
      >
        {team}
      </DefaultText>
      <DefaultText
        style={{ marginBottom: '4px', fontWeight: FontWeights.MEDIUM }}
        color={Colors.PRIMARY}
        size={FontSizes.SMALL}
      >
        Odd :
      </DefaultText>
      <DefaultText
        style={{ marginBottom: '12px' }}
        color={Colors.BLACK}
        size={FontSizes.SMALL}
      >
        {odd}
      </DefaultText>
      <DefaultText
        style={{ marginBottom: '4px', fontWeight: FontWeights.MEDIUM }}
        color={Colors.PRIMARY}
        size={FontSizes.SMALL}
      >
        Bookmaker :
      </DefaultText>
      <DefaultText
        style={{ marginBottom: '12px' }}
        color={Colors.BLACK}
        size={FontSizes.SMALL}
      >
        {bookmaker}
      </DefaultText>
      <Input
        value={
          inputBetAmount
            ? (Math.round(inputBetAmount * 100) / 100).toString()
            : ''
        }
        label="Enter your bet"
        error={inputBetError}
        type="number"
        handleChange={handleBetInputChange}
      />
    </BetSecondColumn>
  )
}
