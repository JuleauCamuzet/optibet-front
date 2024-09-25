import { ReactNode } from 'react'

export type BoxsGrisItem = {
  id: string
  content: ReactNode
  sortingValues: {
    attributeId: string
    value: number | string
  }[]
}

export type BoxsGridItemsData = {
  attributes: {
    id: string
    sortable: boolean
    valueType: 'string' | 'number'
    name: string
  }[]
  items: BoxsGrisItem[]
}

export type SortData = { attributeId: string; order: 'ASC' | 'DESC' }
