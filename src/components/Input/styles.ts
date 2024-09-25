import styled from '@emotion/styled'

import { BorderRadius } from '../../constants/borderRadius'
import { Colors } from '../../constants/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Container = styled.div`
  display: flex;
  border: solid ${Colors.TERTIARY} 1px;
  align-items: center;
  box-sizing: border-box;
  padding: 6px;
  border-radius: ${BorderRadius.NORMAL};
  background-color: ${Colors.LIGHT};

  &:has(input:focus) {
    border-color: ${Colors.PRIMARY};
  }
`

export const StyledInput = styled.input`
  width: 100%;
`
