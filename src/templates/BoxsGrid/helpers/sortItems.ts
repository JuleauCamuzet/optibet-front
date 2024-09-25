import { BoxsGridItemsData, SortData } from '../types'

export const sortItems = (
  boxsGridData: BoxsGridItemsData,
  sortData: SortData
) => {
  let newItems = [...boxsGridData.items]

  newItems = newItems.sort((a, b) => {
    const aAttribute = a.sortingValues.find(
      (sortVal) => sortVal.attributeId === sortData.attributeId
    )
    const bAttribute = b.sortingValues.find(
      (sortVal) => sortVal.attributeId === sortData.attributeId
    )

    if (aAttribute && bAttribute) {
      if (sortData.order === 'ASC') {
        if (aAttribute?.value < bAttribute?.value) {
          return 1
        } else {
          return -1
        }
      } else {
        if (aAttribute?.value > bAttribute?.value) {
          return 1
        } else {
          return -1
        }
      }
    }

    return 1
  })

  return newItems
}
