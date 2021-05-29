import React from 'react'
import styled from 'styled-components'
import { TitleText } from '../component/base/Text'
import { View } from '../component/base/View'
import TreeMap from '../component/treeMap/TreeMap'
import { sortByWeight } from '../utils'

interface DisplayContainerProps {
  data?: IResultData
}

const Container = styled(View)`
  flex: 1;
  padding: 15px;
  width: 100%;
`

const DisplayContainer: React.FC<DisplayContainerProps> = ({ data }) => {
  return (
    <Container>
      <TitleText>Result:</TitleText>
      {data && <TreeMap rows={data.rows} treeMap={sortByWeight(data.treeMap)} />}
    </Container>
  )
}

export default React.memo(DisplayContainer)
