import React from 'react'
import styled from 'styled-components'
import { Button } from '../component/base/Button'
import { InputAreaWithTitle, InputWithTitle } from '../component/base/Input'
import { ColView } from '../component/base/View'
import { MOBILE_WIDTH } from '../utils/constant'
interface InputContainerProps {
  json: string
  setJSON: (json: string) => void
  rows: number
  setRows: (rows: number) => void
}

const Container = styled(ColView)`
  width: 400px;
  padding: 15px;
  background: red;
  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
  }
`

const InputContainer: React.FC<InputContainerProps> = () => {
  return (
    <Container mobileToFull={true}>
      <InputAreaWithTitle title='DATA' />
      <InputWithTitle title='ROWS' />
      <Button text="Submit" />
    </Container>
  )
}

export default React.memo(InputContainer)
