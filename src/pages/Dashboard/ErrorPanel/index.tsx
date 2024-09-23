import React from 'react'

import { Wrapper } from '../Container/styles'
import { DefaultText } from '../../../components/DefaultText'
import { FontSizes } from '../../../constants/fontSizes'
import { Colors } from '../../../constants/colors'
import { Button } from '../../../components/Button'

type PropsType = {
  handleRetry: () => void
  errorMessage: string
}

export const DashboardErrorPanel = ({
  handleRetry,
  errorMessage,
}: PropsType) => {
  return (
    <Wrapper>
      <DefaultText size={FontSizes.GIANT} color={Colors.RED}>
        {errorMessage}
      </DefaultText>
      <Button
        label="Réessayer"
        size="big"
        type="primary"
        handleClick={handleRetry}
      />
    </Wrapper>
  )
}
