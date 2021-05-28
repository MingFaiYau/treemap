import React from 'react'
import styled from 'styled-components'
import { RowView } from './component/base/View'
import DisplayContainer from './container/DisplayContainer'
import InputContainer from './container/InputContainer'
import { checkJSONFormat } from './utils'

const Container = styled(RowView)`
  height: 100vh;
`

const App = () => {
  const [json, setJSON] = React.useState<string>('')
  const [rows, setRows] = React.useState<string>('1')
  const [data, setData] = React.useState<resultData | undefined>(undefined)

  const onSubmitClick = React.useCallback(() => {
    const treeMap = checkJSONFormat(json)
    if (!treeMap) {
      // TODO: invalid format
      alert('invalid json format')
      return
    }
    const numOfRows = parseInt(rows, 10)
    if (treeMap.length < numOfRows) {
      // TODO: invalid rows
      alert('invalid rows number')
      return
    }

    setData({
      treeMap,
      rows: parseInt(rows, 10),
    })
  }, [json, rows])

  return (
    <Container mobileToCol={true}>
      <InputContainer json={json} setJSON={setJSON} rows={rows} setRows={setRows} onSubmitClick={onSubmitClick} />
      <DisplayContainer data={data} />
    </Container>
  )
}

export default React.memo(App)
