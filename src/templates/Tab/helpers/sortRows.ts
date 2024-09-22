import { SortData, TabData } from '../types'

export const sortRows = (tabData: TabData, sortData: SortData) => {
  const sortColumnIndex = tabData.columns.findIndex(
    (column) => column.id === sortData.columnId
  )

  const newRows =
    sortData.order === 'DESC'
      ? tabData.rows.sort((a, b) => {
          if (
            a.values[sortColumnIndex].sortValue >
            b.values[sortColumnIndex].sortValue
          ) {
            return 1
          } else {
            return -1
          }
        })
      : tabData.rows.sort((a, b) => {
          if (
            a.values[sortColumnIndex].sortValue <
            b.values[sortColumnIndex].sortValue
          ) {
            return 1
          } else {
            return -1
          }
        })

  return newRows
}
