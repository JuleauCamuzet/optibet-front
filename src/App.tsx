import React, { useState } from 'react'

import { Button } from './components/Button'
import { Dropdown } from './components/Dropdown'
import { TabData } from './templates/Tab/types'
import { Tab } from './templates/Tab'

export const App = () => {
  const [selectedDropdownId, setSelectedDropdownId] = useState('1')

  const dropdownItems: { label: string; id: string }[] = [
    {
      id: '1',
      label: 'Test 1',
    },
    {
      id: '2',
      label: 'Test 2 oipfjfpoirjopfjopzij',
    },
    {
      id: '3',
      label: 'Test 3',
    },
    {
      id: '4',
      label: 'Test 4',
    },
    {
      id: '5',
      label: 'Test 5',
    },
    {
      id: '6',
      label: 'Test 6',
    },
  ]

  const tabData: TabData = {
    columns: [
      {
        id: '1',
        label: 'Sport',
        sortable: true,
        valueType: 'string',
      },
      {
        id: '2',
        label: 'Region',
        sortable: true,
        valueType: 'string',
      },
      {
        id: '3',
        label: 'Gains (%)',
        sortable: true,
        valueType: 'number',
      },
    ],
    rows: [
      {
        id: '001',
        values: [
          {
            displayValue: 'Basketball',
            sortValue: 'Basketball',
          },
          {
            displayValue: 'EU',
            sortValue: 'EU',
          },
          {
            displayValue: 24.4,
            sortValue: 24.4,
          },
        ],
      },
      {
        id: '002',
        values: [
          {
            displayValue: 'Hockey',
            sortValue: 'Hockey',
          },
          {
            displayValue: 'AU',
            sortValue: 'AU',
          },
          {
            displayValue: 15.5,
            sortValue: 15.5,
          },
        ],
      },
      {
        id: '003',
        values: [
          {
            displayValue: 'Soccer',
            sortValue: 'Soccer',
          },
          {
            displayValue: 'US',
            sortValue: 'US',
          },
          {
            displayValue: 16.5,
            sortValue: 16.5,
          },
        ],
      },
    ],
  }

  const handleDropdownItemClick = (itemId: string) => {
    setSelectedDropdownId(itemId)
  }

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Button
        label="Primary Big"
        handleClick={() => alert('clicked')}
        size="big"
        type="primary"
      />
      <Button
        label="Primary Medium"
        handleClick={() => alert('clicked')}
        size="medium"
        type="primary"
      />
      <Button
        label="Primary Small"
        handleClick={() => alert('clicked')}
        size="small"
        type="primary"
      />
      <Button
        label="Secondary Big"
        handleClick={() => alert('clicked')}
        size="big"
        type="secondary"
      />
      <Button
        label="Secondary Medium"
        handleClick={() => alert('clicked')}
        size="medium"
        type="secondary"
      />
      <Button
        label="Secondary Small"
        handleClick={() => alert('clicked')}
        size="small"
        type="secondary"
      />
      <Button
        label="Tertiary Big"
        handleClick={() => alert('clicked')}
        size="big"
        type="tertiary"
      />
      <Button
        label="Tertiary Medium"
        handleClick={() => alert('clicked')}
        size="medium"
        type="tertiary"
      />
      <Button
        label="Tertiary Small"
        handleClick={() => alert('clicked')}
        size="small"
        type="tertiary"
      />

      <Dropdown
        items={dropdownItems}
        selectedItemId={selectedDropdownId}
        handleItemClick={handleDropdownItemClick}
      />

      <Tab tabData={tabData} />
    </div>
  )
}
