import styled from '@emotion/styled'
import { BorderRadius } from '../../constants/borderRadius'
import { Colors } from '../../constants/colors'

export const Wrapper = styled.div`
  width: 100%;
`

export const SortContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 48px;
  gap: 32px;
  margin-bottom: 24px;
  margin-top: 12px;
`

export const SortItem = styled.button<{ borderColor: string }>`
  border-radius: ${BorderRadius.NORMAL};
  display: flex;
  gap: 12px;
  padding: 8px 12px;
  background-color: ${Colors.LIGHT};
  display: flex;
  align-items: center;
  border: solid ${(props) => props.borderColor} 1px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border-color: ${Colors.PRIMARY};
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`

export const SquareItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  border-radius: ${BorderRadius.NORMAL};
  background-color: ${Colors.LIGHT};
  border: solid ${Colors.TERTIARY} 1px;
`
