import React, { SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { MOBILE_WIDTH } from '../../utils/constant'
import { TitleText } from './Text'
import { ColView } from './View'

const style = css<ICSSResponsive>`
  border-radius: 10px;
  padding: 10px;
  :focus {
    outline: none;
  }
`

export const Input = styled.input<ICSSResponsive>`
  ${style}
`
export const InputArea = styled.textarea<ICSSResponsive>`
  ${style}
  resize: vertical;
`

interface InputWithTitleProps extends SelectHTMLAttributes<HTMLInputElement>, ICSSResponsive {
  title: string
  type?: string
}

export const InputWithTitle: React.FC<InputWithTitleProps> = ({ title, mobileToCol, ...props }) => {
  return (
    <ColView mobileToCol={mobileToCol} style={{ marginBottom: 15 }}>
      <TitleText>{`${title} :`}</TitleText>
      <Input mobileToFull {...props} />
    </ColView>
  )
}

interface InputAreaWithTitleProps extends SelectHTMLAttributes<HTMLTextAreaElement>, ICSSResponsive {
  title: string
  rows?: number
  type?: string
}

export const InputAreaWithTitle: React.FC<InputAreaWithTitleProps> = ({ title, mobileToCol, ...props }) => {
  return (
    <ColView mobileToCol={mobileToCol} style={{ marginBottom: 15 }}>
      <TitleText>{`${title} :`}</TitleText>
      <InputArea mobileToFull {...props} />
    </ColView>
  )
}
