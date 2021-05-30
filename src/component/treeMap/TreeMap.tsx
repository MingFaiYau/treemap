import React from 'react'
import styled from 'styled-components'
import color from '../../utils/color'
import TreeMapItem from './TreeMapItem'

interface ContainerProps {
  rows: number
}

const Container = styled.div<ContainerProps>`
  display: grid;
  grid-auto-flow: column dense;
  grid-template-rows: ${(props) => `repeat(${props.rows},minmax(5rem,auto))`};
  background-color: ${color.treeMapBG};
  border-radius: 10px;
  padding: 3px;
  grid-gap: 3px;
`
interface TreeMapProps {
  rows: number
  treeMap: ITreeMapObj[]
}

const TreeMap: React.FC<TreeMapProps> = ({ rows, treeMap }) => {
  return (
    <Container rows={rows}>
      {treeMap.map((val) => (
        <TreeMapItem key={val.id} data={val} />
      ))}
    </Container>
  )
}

export default React.memo(TreeMap)
