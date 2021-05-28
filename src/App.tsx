import React from 'react'
import styled from 'styled-components'
import { RowView } from './component/base/View'
import DisplayContainer from './container/DisplayContainer'
import InputContainer from './container/InputContainer'

const Container = styled(RowView)`
  height: 100vh;
  background:cyan;
`

const App = () => {
  return (
    <Container mobileToCol={true} flexCenter={true}>
      <InputContainer />
      <DisplayContainer />
    </Container>
  )
}

export default React.memo(App)
