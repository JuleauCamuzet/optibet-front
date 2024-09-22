import React, { useEffect, useState } from 'react'

import { SortData, TabData, TabRow } from './types'
import { Wrapper } from './styles'
import { TabHeader } from './Header'
import { TabBody } from './Body'
import { sortRows } from './helpers/sortRows'

type PropsType = {
  tabData: TabData
}

export const Tab = ({ tabData }: PropsType) => {
  const [rows, setRows] = useState<TabRow[] | null>(null)
  const [sortData, setSortData] = useState<SortData | null>(null)

  useEffect(() => {
    setRows(tabData.rows)
  }, [])

  useEffect(() => {
    if (sortData) {
      const newRows = sortRows(tabData, sortData)

      setRows(newRows)
    }
  }, [sortData])

  return (
    <Wrapper>
      <TabHeader
        columnsData={tabData.columns}
        sortData={sortData}
        setSortData={setSortData}
      />
      <TabBody rows={rows} />
    </Wrapper>
  )
}
