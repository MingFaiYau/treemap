import React from 'react'
import styled from 'styled-components'
import { Button } from '../component/base/Button'
import { InputWithTitle } from '../component/base/Input'
import { TitleText } from '../component/base/Text'
import { ColView } from '../component/base/View'
import RowPicker from '../component/input/RowPicker'
import { useAppContext } from '../context/AppContext'
import { isNumber, isPositiveInteger, isNameValid } from '../utils'
import { MOBILE_WIDTH } from '../utils/constant'

/* mock data
[
    {
        "name": "A",
        "value": 0.01,
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
        "value": 0.1,
        "weight": 2
    },
    {
        "name": "E",
        "value": -0.01333,
        "weight": 2
    }
]
*/
interface InputContainerProps {}

const Container = styled(ColView)`
  width: 400px;
  padding: 15px;
  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
  }
`

const InputContainer: React.FC<InputContainerProps> = () => {
  const { insertTreeMap } = useAppContext()

  const nameInputRef = React.createRef<HTMLInputElement>()
  const valueInputRef = React.createRef<HTMLInputElement>()
  const weightInputRef = React.createRef<HTMLInputElement>()

  const onInsertTreeMapClick = React.useCallback(() => {
    const name = nameInputRef.current?.value
    const value = valueInputRef.current?.value
    const weight = weightInputRef.current?.value
    if (!name) {
      alert('Please input the name')
      nameInputRef.current?.focus()
      return
    }
    if (!isNameValid(name)) {
      alert('Name format invalid ( must <= 50 words )')
      nameInputRef.current?.focus()
      nameInputRef.current?.select()
      return
    }
    if (!value) {
      alert('Please input the value')
      valueInputRef.current?.focus()
      return
    }
    if (!isNumber(value)) {
      alert('Invalid value ( must be a number )')
      valueInputRef.current?.focus()
      valueInputRef.current?.select()
      return
    }
    if (!weight) {
      alert('Please input the weight')
      weightInputRef.current?.focus()
      return
    }
    if (!isPositiveInteger(weight)) {
      alert('Invalid weight ( must be a non-zero positive integer )')
      weightInputRef.current?.focus()
      weightInputRef.current?.select()
      return
    }
    const newTreeMap: ITreeMapObj = {
      id: new Date().getTime(),
      name,
      weight: parseInt(weight, 10),
      value: parseFloat(value),
    }
    insertTreeMap(newTreeMap)
  }, [nameInputRef, valueInputRef, weightInputRef, insertTreeMap])

  return (
    <Container>
      <TitleText>Input</TitleText>
      <InputWithTitle title='Name' placeholder='Name ( <= 50 words )' ref={nameInputRef} />
      <InputWithTitle title='Value' placeholder='Value ( number )' ref={valueInputRef} />
      <InputWithTitle title='Weight' placeholder='Weight ( non-zero positive integer )' ref={weightInputRef} />
      <Button text='Insert' onClick={onInsertTreeMapClick} />
      <RowPicker />
    </Container>
  )
}

export default React.memo(InputContainer)
