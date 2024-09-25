import React, { Dispatch, SetStateAction } from 'react'

import { Wrapper } from './styles'
import { SortData, TabColumn } from '../types'
import { HeaderItem } from './styles'
import { DefaultText } from '../../../components/DefaultText'
import { FontSizes } from '../../../constants/fontSizes'
import { Colors } from '../../../constants/colors'
import { ChevronDown } from '../../../components/icons/Chevron'
import { FontWeights } from '../../../constants/fontWeights'

type PropsType = {
  columnsData: TabColumn[]
  sortData: SortData | null
  setSortData: Dispatch<SetStateAction<SortData | null>>
}

export const TabHeader = ({
  columnsData,
  sortData,
  setSortData,
}: PropsType) => {
  return (
    <Wrapper>
      {columnsData.map((column) => {
        const handleHeaderItemClick = () => {
          const newSortOrder =
            sortData?.columnId !== column.id
              ? 'DESC'
              : sortData.order === 'ASC'
                ? 'DESC'
                : 'ASC'

          setSortData({ columnId: column.id, order: newSortOrder })
        }

        return (
          <HeaderItem
            onClick={handleHeaderItemClick}
            sortable={column.sortable}
            key={column.id}
          >
            <DefaultText
              style={{ width: 'fit-content', fontWeight: FontWeights.MEDIUM }}
              size={FontSizes.SMALL}
              color={Colors.PRIMARY}
            >
              {column.label}
            </DefaultText>
            {sortData?.columnId === column.id && (
              <ChevronDown
                height="18px"
                style={{
                  transform: sortData.order === 'DESC' ? 'rotate(180deg)' : '',
                }}
                color={Colors.PRIMARY}
              />
            )}
          </HeaderItem>
        )
      })}
    </Wrapper>
  )
}
