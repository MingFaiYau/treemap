import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'

import JsonItem from './JsonItem'

const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(2rem, auto);
  border-style: solid;
  border-width: 1px 1px 0 0;
`

interface JsonTableProps {}

const JsonTable: React.FC<JsonTableProps> = () => {
  const { treeMaps, removeTreeMap } = useAppContext()
  return (
    <Container>
      <JsonItem name='Name' value='Value' weight='Weight' action='Action' />
      {treeMaps.map((val) => {
        const removeClick = () => {
          removeTreeMap(val.id)
        }
        return (
          <JsonItem
            key={val.id}
            name={val.name}
            value={val.value.toString()}
            weight={val.weight.toString()}
            action={removeClick}
          />
        )
      })}
    </Container>
  )
}

export default React.memo(JsonTable)
