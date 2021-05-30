import React, { SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

const style = css`
  padding: 10px 10px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  border: 1px solid;
  :focus {
    outline: none;
  }
`

const MyButton = styled.input`
  ${style}
`

interface ButtonProps extends SelectHTMLAttributes<HTMLInputElement> {
  text: string
  type?: string
}

export const Button: React.FC<ButtonProps> = ({ text, type = 'button', ...props }) => {
  return <MyButton type={type} {...props} value={text} />
}
