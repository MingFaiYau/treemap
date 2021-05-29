import React from 'react'
import styled from 'styled-components'
import { Button } from '../component/base/Button'
import { InputAreaWithTitle, InputWithTitle } from '../component/base/Input'
import { ColView } from '../component/base/View'
import { isNumber } from '../utils'
import { MOBILE_WIDTH } from '../utils/constant'

/* mock data
[
    {
        "name": "A",
        "value": 1,
        "weight": 6
    },
    {
        "name": "B",
        "value": -0.02,
        "weight": 4
    },
    {
        "name": "C",
        "value": -0.1,
        "weight": 3
    },
    {
        "name": "D",
        "value": 1,
        "weight": 2
    },
    {
        "name": "E",
        "value": -1,
        "weight": 2
    }
]
*/
interface InputContainerProps {
  json: string
  setJSON: (json: string) => void
  rows: string
  setRows: (rows: string) => void
  onSubmitClick: () => void
}

const Container = styled(ColView)`
  width: 400px;
  padding: 15px;
  background: red;
  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
  }
`

const InputContainer: React.FC<InputContainerProps> = ({ json, setJSON, rows, setRows, onSubmitClick }) => {
  const onJsonChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setJSON(e.target.value.toString())
    },
    [setJSON],
  )

  const onRowsChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNumber(e.target.value)) setRows(e.target.value)
    },
    [setRows],
  )

  return (
    <Container>
      <InputAreaWithTitle title='DATA' placeholder='JSON Array' value={json} onChange={onJsonChange} rows={10} />
      <InputWithTitle title='ROWS' placeholder='Rows ( must a positive number )' value={rows} onChange={onRowsChange} />
      <Button text='Submit' onClick={onSubmitClick} />
    </Container>
  )
}

export default React.memo(InputContainer)
