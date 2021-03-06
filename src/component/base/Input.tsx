import React, { SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { InputText } from './Text'
import { RowView } from './View'

const style = css<ICSSResponsive>`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  :focus {
    outline: none;
  }
`

export const Input = styled.input<ICSSResponsive>`
  flex: 1;
  ${style};
`
export const InputArea = styled.textarea<ICSSResponsive>`
  ${style}
  resize: vertical;
`

interface InputWithTitleProps extends SelectHTMLAttributes<HTMLInputElement>, ICSSResponsive {
  title: string
  type?: string
}

export const InputWithTitle = React.forwardRef<HTMLInputElement, InputWithTitleProps>(
  ({ title, mobileToCol, ...props }, ref) => (
    <RowView mobileToCol={mobileToCol} flexCenter style={{ marginBottom: 15 }}>
      <InputText>{`${title} :`}</InputText>
      <Input mobileToFull ref={ref} {...props} />
    </RowView>
  ),
)
interface InputAreaWithTitleProps extends SelectHTMLAttributes<HTMLTextAreaElement>, ICSSResponsive {
  title: string
  rows?: number
  type?: string
}

export const InputAreaWithTitle: React.FC<InputAreaWithTitleProps> = ({ title, mobileToCol, ...props }) => {
  return (
    <RowView mobileToCol={mobileToCol} style={{ marginBottom: 15 }}>
      <InputText>{`${title} :`}</InputText>
      <InputArea mobileToFull {...props} />
    </RowView>
  )
}
