import styled from '@emotion/styled'
import { BorderRadius } from '../../constants/borderRadius'
import { Colors } from '../../constants/colors'
import { FontWeights } from '../../constants/fontWeights'
import { FontSizes } from '../../constants/fontSizes'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  position: relative;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${BorderRadius.NORMAL};
  background-color: ${Colors.LIGHT};
  cursor: pointer;
  box-sizing: border-box;
  padding: 8px 12px;
  gap: 32px;
  border: solid ${Colors.TERTIARY} 1px;

  &:hover {
    border-color: ${Colors.PRIMARY};
  }
`

export const HeaderText = styled.span`
  color: ${Colors.PRIMARY};
  font-weight: ${FontWeights.SMALL};
  size: ${FontSizes.SMALL};
`

export const BodyContainer = styled.div`
  padding-top: 8px;
  position: absolute;
  width: fit-content;
  bottom: 0;
  transform: translateY(100%);
`

export const Body = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 2px;
  background-color: ${Colors.WHITE};
  border-radius: ${BorderRadius.NORMAL};
  border: solid ${Colors.SECONDARY} 1px;
`

export const Item = styled.span`
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  padding: 8px;
  border-radius: ${BorderRadius.NORMAL};
  white-space: nowrap;
  color: ${Colors.PRIMARY};
  font-weight: ${FontWeights.SMALL};

  &:hover {
    background-color: ${Colors.LIGHT};
    color: ${Colors.PRIMARY};
  }
`
