import styled from '@emotion/styled'

import { ButtonSize, ButtonType } from './types'
import { Colors } from '../../constants/colors'
import { BorderRadius } from '../../constants/borderRadius'
import { FontWeights } from '../../constants/fontWeights'

export const Wrapper = styled.div<{
  type: ButtonType
  size: ButtonSize
}>`
  width: fit-content;
  box-sizing: border-box;
  font-weight: ${FontWeights.SMALL};
  border-radius: ${BorderRadius.NORMAL};
  cursor: pointer;
  background-color: ${(props) =>
    props.type === 'primary'
      ? Colors.PRIMARY
      : props.type === 'secondary'
        ? Colors.SECONDARY
        : Colors.TERTIARY};

  padding: ${(props) =>
    props.size === 'small'
      ? '6px 12px'
      : props.size === 'medium'
        ? '8px 18px'
        : '12px 24px'};

  color: ${Colors.WHITE};

  &:hover {
    filter: brightness(0.95);
  }
`
