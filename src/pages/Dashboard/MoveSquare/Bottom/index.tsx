import React from 'react'

import { DefaultText } from '../../../../components/DefaultText'
import { Colors } from '../../../../constants/colors'
import { FontSizes } from '../../../../constants/fontSizes'
import { BetBottomContainer, BetBottomRow } from '../styles'
import { FontWeights } from '../../../../constants/fontWeights'

type PropsType = {
  sport: string
  league: string
  benefits: number
  regions: string
  calculatedBenefits: number | null
}

export const BetSquareBottom = ({
  sport,
  league,
  benefits,
  regions,
  calculatedBenefits,
}: PropsType) => {
  return (
    <BetBottomContainer>
      <BetBottomRow>
        <DefaultText
          style={{
            width: 'fit-content',
            fontWeight: FontWeights.MEDIUM,
          }}
          color={Colors.PRIMARY}
          size={FontSizes.SMALL}
        >
          Sport :
        </DefaultText>
        <DefaultText
          style={{ width: 'fit-content' }}
          color={Colors.BLACK}
          size={FontSizes.SMALL}
        >
          {sport}
        </DefaultText>
      </BetBottomRow>
      <BetBottomRow>
        <DefaultText
          style={{
            width: 'fit-content',
            fontWeight: FontWeights.MEDIUM,
          }}
          color={Colors.PRIMARY}
          size={FontSizes.SMALL}
        >
          League :
        </DefaultText>
        <DefaultText
          style={{ width: 'fit-content' }}
          color={Colors.BLACK}
          size={FontSizes.SMALL}
        >
          {league}
        </DefaultText>
      </BetBottomRow>
      <BetBottomRow>
        <DefaultText
          style={{
            width: 'fit-content',
            fontWeight: FontWeights.MEDIUM,
          }}
          color={Colors.PRIMARY}
          size={FontSizes.SMALL}
        >
          Benefits :
        </DefaultText>
        <DefaultText
          style={{ width: 'fit-content' }}
          color={Colors.BLACK}
          size={FontSizes.SMALL}
        >
          {benefits}%
        </DefaultText>
      </BetBottomRow>
      <BetBottomRow>
        <DefaultText
          style={{
            width: 'fit-content',
            fontWeight: FontWeights.MEDIUM,
          }}
          color={Colors.PRIMARY}
          size={FontSizes.SMALL}
        >
          Regions :
        </DefaultText>
        <DefaultText
          style={{ width: 'fit-content' }}
          color={Colors.BLACK}
          size={FontSizes.SMALL}
        >
          {regions}
        </DefaultText>
      </BetBottomRow>
      <DefaultText
        style={{
          width: 'fit-content',
          marginTop: '12px',
          marginBottom: '12px',
          fontWeight: FontWeights.MEDIUM,
        }}
        color={Colors.PRIMARY}
        size={FontSizes.BIG}
      >
        Calculated Benefits :
      </DefaultText>
      <DefaultText color={Colors.BLACK} size={FontSizes.BIG}>
        {typeof calculatedBenefits === 'number'
          ? Math.round(calculatedBenefits * 100) / 100
          : '----'}
      </DefaultText>
    </BetBottomContainer>
  )
}
