import React, { Dispatch, SetStateAction } from 'react'

import { Wrapper } from './styles'
import { SortData, TabColumn } from '../types'
import { HeaderItem } from './styles'
import { DefaultText } from '../../../components/DefaultText'
import { FontSizes } from '../../../constants/fontSizes'
import { Colors } from '../../../constants/colors'
import { ChevronDown } from '../../../components/icons/Chevron'

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
            <DefaultText size={FontSizes.SMALL} color={Colors.WHITE}>
              {column.label}
            </DefaultText>
            {sortData?.columnId === column.id && (
              <ChevronDown
                height="18px"
                style={{
                  transform: sortData.order === 'ASC' ? 'rotate(180deg)' : '',
                }}
              />
            )}
          </HeaderItem>
        )
      })}
    </Wrapper>
  )
}
