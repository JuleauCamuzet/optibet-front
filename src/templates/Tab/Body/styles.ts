import styled from '@emotion/styled'
import { Colors } from '../../../constants/colors'
import { BorderRadius } from '../../../constants/borderRadius'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 6px;
  border: solid ${Colors.TERTIARY} 1px;
  border-bottom-right-radius: ${BorderRadius.NORMAL};
  border-bottom-left-radius: ${BorderRadius.NORMAL};
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.LIGHT};
  border-radius: ${BorderRadius.NORMAL};
  box-sizing: border-box;
  border: solid ${Colors.TERTIARY} 1px;
`

export const RowItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
`
