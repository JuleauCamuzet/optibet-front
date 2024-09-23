import React, { useEffect, useState } from 'react'

import { SortData, TabData, TabRow } from './types'
import { Wrapper } from './styles'
import { TabHeader } from './Header'
import { TabBody } from './Body'
import { sortRows } from './helpers/sortRows'
import { DefaultText } from '../../components/DefaultText'
import { FontSizes } from '../../constants/fontSizes'
import { Colors } from '../../constants/colors'
import { Button } from '../../components/Button'
import { TabBodyLoading } from './Body/loading'
import { TabHeaderLoading } from './Header/loading'

type PropsType = {
  tabData: TabData | null
  error: string
  handleRetry: () => void
  loading: boolean
}

export const Tab = ({ tabData, error, handleRetry, loading }: PropsType) => {
  const [rows, setRows] = useState<TabRow[] | null>(null)
  const [sortData, setSortData] = useState<SortData | null>(null)

  useEffect(() => {
    if (tabData) {
      setRows(tabData.rows)
    }
  }, [tabData])

  useEffect(() => {
    if (sortData && tabData) {
      const closeTabData: TabData = {
        columns: [...tabData.columns],
        rows: [...tabData.rows],
      }
      const newRows = sortRows(closeTabData, sortData)

      setRows(newRows)
    }
  }, [sortData])

  if (error) {
    return (
      <Wrapper>
        <DefaultText size={FontSizes.BIG} color={Colors.RED}>
          {error}
        </DefaultText>
        <Button
          label="Réessayer"
          handleClick={handleRetry}
          type="primary"
          size="medium"
        />
      </Wrapper>
    )
  } else if (loading) {
    return (
      <Wrapper>
        <TabHeaderLoading />
        <TabBodyLoading />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        {tabData && (
          <TabHeader
            columnsData={tabData.columns}
            sortData={sortData}
            setSortData={setSortData}
          />
        )}
        <TabBody rows={rows} />
      </Wrapper>
    )
  }
}
