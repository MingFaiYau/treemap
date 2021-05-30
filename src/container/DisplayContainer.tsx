import React from 'react'
import styled from 'styled-components'
import { TitleText } from '../component/base/Text'
import { View } from '../component/base/View'
import TreeMap from '../component/treeMap/TreeMap'
import { useAppContext } from '../context/AppContext'
import { sortByWeight } from '../utils'

interface DisplayContainerProps {}

const Container = styled(View)`
  flex: 1;
  padding: 15px;
  width: 100%;
`

const DisplayContainer: React.FC<DisplayContainerProps> = () => {
  const { treeMaps, rows } = useAppContext()
  return (
    <Container>
      <TitleText>Result</TitleText>
      <TreeMap rows={rows} treeMap={sortByWeight(treeMaps)} />
    </Container>
  )
}

export default React.memo(DisplayContainer)
