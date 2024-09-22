import { ReactNode } from 'react'

export type TabRow = {
  values: {
    displayValue: number | string | ReactNode
    sortValue: number | string
  }[]
  id: string
}

export type TabColumn = {
  id: string
  label: string
  valueType: 'number' | 'string' | 'element'
  sortable: boolean
}

export type TabData = {
  columns: TabColumn[]
  rows: TabRow[]
}

export type SortData = { columnId: string; order: 'ASC' | 'DESC' }
