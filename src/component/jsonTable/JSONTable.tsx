import React from 'react'
import styled from 'styled-components'
import color from '../../utils/color'
import JSONItem from './JSONItem'

interface ContainerProps {
  rows: number
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-auto-flow: column dense;
  grid-template-rows: ${(props) => `repeat(${props.rows},5rem)`};
  background-color: ${color.treeMapBG};
  grid-gap: 1px;
`

interface JSONTableProps {
  rows: number
  treeMap: ITreeMapObj[]
}

const JSONTable: React.FC<JSONTableProps> = ({ rows, treeMap }) => {
  return (
    <Container rows={rows}>
      {treeMap.map((val) => (
        <JSONItem key={val.name} data={val} />
      ))}
    </Container>
  )
}

export default React.memo(JSONTable)
