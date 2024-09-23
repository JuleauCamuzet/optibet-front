import React from 'react'

import { TabRow } from '../types'
import { Row, RowItem, Wrapper } from './styles'
import { DefaultText } from '../../../components/DefaultText'
import { FontSizes } from '../../../constants/fontSizes'
import { Colors } from '../../../constants/colors'

type PropsType = {
  rows: TabRow[] | null
}

export const TabBody = ({ rows }: PropsType) => {
  return (
    <Wrapper>
      {rows && rows.length ? (
        rows.map((row) => {
          return (
            <Row key={row.id}>
              {row.values.map((val) => {
                return (
                  <RowItem key={Math.random()}>
                    <DefaultText size={FontSizes.TINY} color={Colors.BLACK}>
                      {val.displayValue}
                    </DefaultText>
                  </RowItem>
                )
              })}
            </Row>
          )
        })
      ) : (
        <DefaultText
          style={{ margin: '16px 0 16px 32px' }}
          color={Colors.PRIMARY}
          size={FontSizes.BIG}
        >
          Aucun résultat
        </DefaultText>
      )}
    </Wrapper>
  )
}
