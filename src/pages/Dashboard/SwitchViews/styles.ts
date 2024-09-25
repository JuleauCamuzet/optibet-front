import styled from '@emotion/styled'

import { BorderRadius } from '../../../constants/borderRadius'
import { Colors } from '../../../constants/colors'

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  height: 100%;
  align-items: center;
`

export const SwitchButton = styled.button<{ toggle: boolean }>`
  cursor: pointer;
  border-radius: ${BorderRadius.NORMAL};
  border: solid ${(props) => (props.toggle ? Colors.PRIMARY : Colors.TERTIARY)}
    1px;
  background-color: ${Colors.LIGHT};
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: ${Colors.PRIMARY};
  }
`
