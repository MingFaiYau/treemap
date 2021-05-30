import React from 'react'
import styled from 'styled-components'
import { Text } from '../base/Text'
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
  border: 2px solid ${color.treeItemBorder};
  border-radius: 10px;
`

const TreeMapItemText = styled(Text)`
  font-size: 1rem;
  font-weight: bolder;
  word-break: break-all;
  padding: 5px;
`

interface TreeMapItemProps {
  data: ITreeMapObj
}

const TreeMapItem: React.FC<TreeMapItemProps> = ({ data }) => {
  return (
    <Container weight={data.weight} value={data.value} flexCenter={true}>
      <TreeMapItemText>{data.name}</TreeMapItemText>
      <TreeMapItemText>{convertValueToPercentage(data.value)}</TreeMapItemText>
    </Container>
  )
}

export default React.memo(TreeMapItem)
