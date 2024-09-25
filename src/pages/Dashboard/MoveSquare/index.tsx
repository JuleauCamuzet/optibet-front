import React, { ChangeEvent, useEffect, useState } from 'react'

import { BetsColumnsContainer, Wrapper } from './styles'
import { BetSquareFirstColumn } from './FirstColumn'
import { BetSquareSecondColumn } from './SecondColumn'
import { BetSquareBottom } from './Bottom'

type PropsType = {
  sport: string
  league: string
  oddA: number
  oddB: number
  benefits: number
  teamA: string
  teamB: string
  bookmakerA: string
  bookmakerB: string
  region: string
}

export const DashboardMoveSquare = ({
  sport,
  league,
  oddA,
  oddB,
  benefits,
  teamA,
  teamB,
  region,
  bookmakerA,
  bookmakerB,
}: PropsType) => {
  const [calculatedBenefits, setCalculatedBenefits] = useState<number | null>(
    null
  )
  const [inputBetA, setInputBetA] = useState<number | null>(null)
  const [inputBetB, setInputBetB] = useState<number | null>(null)

  useEffect(() => {
    if (!inputBetA || !inputBetB) {
      setCalculatedBenefits(null)
    } else {
      setCalculatedBenefits(
        inputBetA + inputBetB + ((inputBetA + inputBetB) * benefits) / 100
      )
    }
  }, [inputBetA, inputBetB])

  const handleInputBetAChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setInputBetB(null)
      setInputBetA(null)
    } else {
      const val = Number(e.target.value)
      const newInputBetB = val / oddB

      setInputBetA(Number(e.target.value))
      setInputBetB(newInputBetB)
    }
  }

  const handleInputBetBChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setInputBetB(null)
      setInputBetA(null)
    } else {
      const val = Number(e.target.value)

      const newInputBetA = val / oddA

      setInputBetB(Number(e.target.value))
      setInputBetA(newInputBetA)
    }
  }

  return (
    <Wrapper>
      <BetsColumnsContainer>
        <BetSquareFirstColumn
          odd={oddA}
          bookmaker={bookmakerA}
          team={teamA}
          handleBetInputChange={handleInputBetAChange}
          inputBetAmount={inputBetA}
          inputBetError=""
        />
        <BetSquareSecondColumn
          handleBetInputChange={handleInputBetBChange}
          inputBetAmount={inputBetB}
          inputBetError=""
          bookmaker={bookmakerB}
          odd={oddB}
          team={teamB}
        />
      </BetsColumnsContainer>
      <BetSquareBottom
        sport={sport}
        league={league}
        benefits={benefits}
        calculatedBenefits={calculatedBenefits}
        regions={region}
      />
    </Wrapper>
  )
}
