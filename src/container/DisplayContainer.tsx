import React from 'react'
import styled from 'styled-components'
import { TitleText } from '../component/base/Text'
import { View } from '../component/base/View'

interface DisplayContainerProps {
  data?: resultData
}

const Container = styled(View)`
  flex: 1;
  padding: 15px;
  width: 100%;
  background-color: blue;
`

const DisplayContainer: React.FC<DisplayContainerProps> = ({ data }) => {
  return (
    <Container flexCenter={true}>
      <TitleText>Result:</TitleText>
      {data && <div>{data.rows}</div>}
    </Container>
  )
}

export default React.memo(DisplayContainer)
