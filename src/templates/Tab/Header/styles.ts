import styled from '@emotion/styled'

import { Colors } from '../../../constants/colors'
import { BorderRadius } from '../../../constants/borderRadius'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.TERTIARY};
  height: 48px;
  padding: 6px;
`

export const HeaderItem = styled.div<{ sortable: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  background-color: ${Colors.TERTIARY};
  border-radius: ${BorderRadius.NORMAL};
  gap: 12px;

  &:hover {
    cursor: ${(props) => (props.sortable ? 'pointer' : 'default')};
    background-color: ${(props) => (props.sortable ? Colors.SECONDARY : '')};
  }
`
