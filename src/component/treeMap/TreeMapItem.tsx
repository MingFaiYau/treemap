import React from 'react'
import styled from 'styled-components'
import { TreeMapItemText } from '../base/Text'
import { View } from '../base/View'
import color from '../../utils/color'

interface ContainerProps {
  weight: number
  value: number
}

const Container = styled(View)<ContainerProps>`
  grid-column-start: ${(props) => `span ${props.weight}`};
  background: ${(props) => (props.value > 0 ? color.treeItemPositiveBG : color.treeItemNegativeBG)};
  border: 1px solid ${color.treeItemBorder};
`

interface TreeMapItemProps {
  data: ITreeMapObj
}

const TreeMapItem: React.FC<TreeMapItemProps> = ({ data }) => {
  return (
    <Container weight={data.weight} value={data.value} flexCenter={true}>
      <TreeMapItemText>{data.name}</TreeMapItemText>
      <TreeMapItemText>{`${data.value}%`}</TreeMapItemText>
    </Container>
  )
}

export default React.memo(TreeMapItem)
