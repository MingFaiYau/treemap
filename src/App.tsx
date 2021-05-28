import React from 'react'
import styled from 'styled-components'
import { RowView } from './component/base/View'
import DisplayContainer from './container/DisplayContainer'
import InputContainer from './container/InputContainer'

const Container = styled(RowView)`
  height: 100vh;
`

const App = () => {
  const [json, setJSON] = React.useState<string>('')
  const [rows, setRows] = React.useState<number>(0)

  return (
    <Container mobileToCol={true}>
      <InputContainer json={json} setJSON={setJSON} rows={rows} setRows={setRows} />
      <DisplayContainer json={json} rows={rows} />
    </Container>
  )
}

export default React.memo(App)
