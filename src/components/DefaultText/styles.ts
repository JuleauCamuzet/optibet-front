import styled from '@emotion/styled'

import { FontSizes } from '../../constants/fontSizes'
import { Colors } from '../../constants/colors'

export const Wrapper = styled.span<{ size: FontSizes; color: Colors }>`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`
