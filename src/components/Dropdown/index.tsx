import React, { useEffect, useRef, useState } from 'react'

import { Body, BodyContainer, Header, HeaderText, Item, Wrapper } from './style'
import { ChevronDown } from '../icons/Chevron'
import { Colors } from '../../constants/colors'

export type DropdownPropsType = {
  selectedItemId: string | null
  items: { label: string; id: string }[]
  handleItemClick: (itemId: string) => void
}

export const Dropdown = ({
  selectedItemId,
  items,
  handleItemClick,
}: DropdownPropsType) => {
  const [opened, setOpened] = useState(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (
        e.target &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        handleClose()
      }
    }

    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  const handleHeaderClick = () => {
    setOpened(!opened)
  }

  const handleClose = () => {
    setOpened(false)
  }

  const selectedItem = items.find((item) => item.id === selectedItemId)
  return (
    <Wrapper ref={dropdownRef}>
      <Header onClick={handleHeaderClick}>
        <HeaderText>{selectedItem?.label ?? '-----'}</HeaderText>
        <ChevronDown
          color={Colors.PRIMARY}
          style={{ transform: `rotate(${opened ? 180 : 0}deg)` }}
        />
      </Header>
      <BodyContainer>
        <Body visible={opened}>
          {items.map((item) => {
            if (item.id !== selectedItemId) {
              const onItemClick = () => {
                handleClose()
                handleItemClick(item.id)
              }

              return (
                <Item onClick={onItemClick} key={item.id}>
                  {item.label}
                </Item>
              )
            }
          })}
        </Body>
      </BodyContainer>
    </Wrapper>
  )
}
