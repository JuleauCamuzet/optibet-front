import styled from '@emotion/styled'

import { Colors } from '../../../constants/colors'
import { BorderRadius } from '../../../constants/borderRadius'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 12px;
`

export const BetsColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  gap: 24px;
`

export const BetFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-right: 24px;
  border-radius: ${BorderRadius.NORMAL};
  background-color: ${Colors.TERTIARY};
  padding: 12px 24px;
  border: solid ${Colors.SECONDARY} 1px;
`

export const BetSecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 24px;
  background-color: ${Colors.TERTIARY};
  border-radius: ${BorderRadius.NORMAL};
  padding: 12px 24px;
  border: solid ${Colors.SECONDARY} 1px;
`

export const BetBottomContainer = styled.div`
  padding-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const BetBottomRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`
