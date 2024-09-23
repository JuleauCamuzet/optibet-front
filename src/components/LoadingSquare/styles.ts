import styled from '@emotion/styled'

import { BorderRadius } from '../../constants/borderRadius'
import { Colors } from '../../constants/colors'

export const Wrapper = styled.div<{ width?: string; height?: string }>`
  @keyframes loading {
    0% {
      background-color: ${Colors.TERTIARY};
    }

    50% {
      background-color: ${Colors.LIGHT};
    }

    100% {
      background-color: ${Colors.TERTIARY};
    }
  }

  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '100%'};
  border-radius: ${BorderRadius.NORMAL};
  animation-name: loading;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
