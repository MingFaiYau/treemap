import React from 'react'
import styled from 'styled-components'
import { TreeMapItemText } from '../base/Text'
import { View } from '../base/View'
import color from '../../utils/color'
import { convertValueToPercentage } from '../../utils'

interface ContainerProps {
  weight: number
  value: number
}

const Container = styled(View)<ContainerProps>`
  grid-column-start: ${(props) => `span ${props.weight}`};
  background: ${(props) => (props.value > 0 ? color.treeItemPositiveBG : color.treeItemNegativeBG)};
  border: 1px solid ${color.treeItemBorder};
`

interface JSONItemProps {
  data: ITreeMapObj
}

const JSONItem: React.FC<JSONItemProps> = ({ data }) => {
  return (
    <Container weight={data.weight} value={data.value} flexCenter={true}>
      <TreeMapItemText>{data.name}</TreeMapItemText>
      <TreeMapItemText>{convertValueToPercentage(data.value)}</TreeMapItemText>
    </Container>
  )
}

export default React.memo(JSONItem)
