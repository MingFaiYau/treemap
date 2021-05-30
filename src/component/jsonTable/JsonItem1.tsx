import React from 'react'
import styled, { css } from 'styled-components'
import color from '../../utils/color'
import { Button } from '../base/Button'
import { View } from '../base/View'

const itemCss = css`
  border-style: solid;
  border-width: 0 0 1px 1px;
  border-color: black;
  word-break: break-all;
  padding: 3px;
`

const JsonItemText = styled(View).attrs((props) => ({ flexCenter: true }))<{
  isTitle?: boolean
}>`
  font-size: ${(props) => (props.isTitle ? '1rem' : '.8rem')};
  ${(props) => props.isTitle && `font-weight:bolder`};
  ${itemCss}
`

const RemoveButton = styled(Button)`
  background: ${color.removeButtonBG};
  ${itemCss}
  border-radius: 0;
  font-weight: bolder;
`

interface JsonItemProps {
  idx: number | string
  name: string
  value: string
  weight: string
  action: string | (() => void)
}

const JsonItem: React.FC<JsonItemProps> = ({ idx, name, value, weight, action }) => {
  const isTitle = typeof action === 'string'
  const actionRender =
    typeof action === 'string' ? (
      <JsonItemText isTitle={isTitle}>{action}</JsonItemText>
    ) : (
      <RemoveButton text='Remove' onClick={action} />
    )
  return (
    <>
      <JsonItemText isTitle={isTitle}>{typeof idx === 'string' ? idx : idx + 1}</JsonItemText>
      <JsonItemText isTitle={isTitle}>{name}</JsonItemText>
      <JsonItemText isTitle={isTitle}>{value}</JsonItemText>
      <JsonItemText isTitle={isTitle}>{weight}</JsonItemText>
      {actionRender}
    </>
  )
}

export default React.memo(JsonItem)
