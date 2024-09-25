import React, { useEffect, useState } from 'react'

import {
  ItemsContainer,
  SortContainer,
  SortItem,
  SquareItem,
  Wrapper,
} from './styles'
import { DefaultText } from '../../components/DefaultText'
import { FontSizes } from '../../constants/fontSizes'
import { Colors } from '../../constants/colors'
import { BoxsGridItemsData, BoxsGrisItem } from './types'
import { sortItems } from './helpers/sortItems'
import { ChevronDown } from '../../components/icons/Chevron'

type PropsType = {
  loading: boolean
  itemsData: BoxsGridItemsData | null
}

export const BoxsGrid = ({ itemsData, loading }: PropsType) => {
  const [sortedItems, setSortedItems] = useState<BoxsGrisItem[] | null>(null)
  const [sortData, setSortData] = useState<{
    attributeId: string
    order: 'ASC' | 'DESC'
  } | null>(null)

  useEffect(() => {
    if (itemsData) {
      setSortedItems(itemsData.items)
    }
  }, [itemsData])

  useEffect(() => {
    if (itemsData && sortData) {
      const newSortedItems = sortItems(itemsData, sortData)

      setSortedItems(newSortedItems)
    }
  }, [sortData, itemsData])

  if (loading) {
    return <>Loading</>
  } else {
    return (
      <Wrapper>
        <DefaultText size={FontSizes.SMALL} color={Colors.PRIMARY}>
          Trier par :
        </DefaultText>
        <SortContainer>
          {itemsData &&
            itemsData.attributes.map((attribute) => {
              const handleSortItemClick = () => {
                setSortData({
                  attributeId: attribute.id,
                  order:
                    attribute.id !== sortData?.attributeId
                      ? 'ASC'
                      : sortData?.order === 'ASC'
                        ? 'DESC'
                        : 'ASC',
                })
              }

              const isAttributeSelected = sortData?.attributeId === attribute.id

              return (
                <SortItem
                  borderColor={
                    isAttributeSelected ? Colors.PRIMARY : Colors.TERTIARY
                  }
                  onClick={handleSortItemClick}
                  key={attribute.id}
                >
                  <DefaultText
                    size={FontSizes.SMALL}
                    color={
                      isAttributeSelected ? Colors.PRIMARY : Colors.SECONDARY
                    }
                  >
                    {attribute.name}
                  </DefaultText>
                  {isAttributeSelected && (
                    <ChevronDown
                      style={{
                        transform:
                          sortData.order === 'DESC' ? 'rotate(180deg)' : '',
                      }}
                      width="24px"
                      height="18px"
                      color={Colors.PRIMARY}
                    />
                  )}
                </SortItem>
              )
            })}
        </SortContainer>
        <ItemsContainer>
          {sortedItems && sortedItems.length ? (
            sortedItems.map((item) => {
              return <SquareItem key={item.id}>{item.content}</SquareItem>
            })
          ) : (
            <DefaultText
              style={{ marginTop: '64px' }}
              color={Colors.PRIMARY}
              size={FontSizes.GIANT}
            >
              No results
            </DefaultText>
          )}
        </ItemsContainer>
      </Wrapper>
    )
  }
}
