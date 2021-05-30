import React from 'react'
import styled from 'styled-components'
import { RowView } from '../base/View'
import { Button } from '../base/Button'
import { useAppContext } from '../../context/AppContext'
import { Input } from '../base/Input'
import { InputText } from '../base/Text'

const Container = styled(RowView)`
  margin-top: 15px;
`

const ActionButton = styled(Button)<{ left?: boolean; right?: boolean }>`
  width: 37px;
  ${(props) => props.right && `margin-left:15px`};
  ${(props) => props.left && `margin-right:15px`};
`

interface RowPickerProps {}

const RowPicker: React.FC<RowPickerProps> = () => {
  const { rows, treeMaps, addRows, reduceRows } = useAppContext()
  const allowAdd = rows < treeMaps.length
  const allowReduce = rows > 1
  return (
    <Container flexCenter={true}>
      <InputText>Rows:</InputText>
      <ActionButton text='-' left onClick={reduceRows} disabled={!allowReduce} />
      <Input value={rows} disabled />
      <ActionButton text='+' right onClick={addRows} disabled={!allowAdd} />
    </Container>
  )
}

export default React.memo(RowPicker)
