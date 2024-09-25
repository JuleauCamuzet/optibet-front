import styled from '@emotion/styled'

import { Colors } from '../../../constants/colors'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
  margin-bottom: 32px;
  margin-top: 64px;
  border-bottom: solid ${Colors.TERTIARY} 1px;
`

export const FiltersContainer = styled.div`
  display: flex;
  gap: 32px;
`
