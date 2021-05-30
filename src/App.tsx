import React from 'react'
import styled from 'styled-components'
import { RowView } from './component/base/View'
import { AppProvider } from './context/AppContext'
import DisplayContainer from './container/DisplayContainer'
import InputContainer from './container/InputContainer'

const Container = styled(RowView)`
  height: 100vh;
`

const App = () => {
  return (
    <AppProvider>
      <Container mobileToCol={true}>
        <InputContainer />
        <DisplayContainer />
      </Container>
    </AppProvider>
  )
}

export default React.memo(App)
