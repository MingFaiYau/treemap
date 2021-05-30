import React from 'react'
import styled from 'styled-components'
import color from '../../utils/color'
import { Button } from '../base/Button'
import { View } from '../base/View'

const JsonItemText = styled(View).attrs((props) => ({ flexCenter: true }))<{
  isTitle?: boolean
}>`
  font-size: ${(props) => (props.isTitle ? '1rem' : '.8rem')};
  ${(props) => props.isTitle && `font-weight:bolder`};
  border-style: solid;
  border-width: 0 0 1px 1px;
  word-break: break-all;
  padding: 3px;
`

const RemoveButton = styled(Button)`
  background: ${color.removeButtonBG};
  padding: 3px;
  border-style: solid;
  border-width: 0 0 1px 1px;
  border-radius: 0;
`

interface JsonItemProps {
  name: string
  value: string
  weight: string
  action: string | (() => void)
}

const JsonItem: React.FC<JsonItemProps> = ({ name, value, weight, action }) => {
  const isTitle = typeof action === 'string'
  const actionRender =
    typeof action === 'string' ? (
      <JsonItemText isTitle={isTitle}>{action}</JsonItemText>
    ) : (
      <RemoveButton text='Remove' onClick={action} />
    )
  return (
    <>
      <JsonItemText isTitle={isTitle}>{name}</JsonItemText>
      <JsonItemText isTitle={isTitle}>{value}</JsonItemText>
      <JsonItemText isTitle={isTitle}>{weight}</JsonItemText>
      {actionRender}
    </>
  )
}

export default React.memo(JsonItem)
