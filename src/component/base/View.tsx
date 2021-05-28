import { SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

const style = css<ICSSResponsive>`
  padding: 0px;
  margin: 0px;

  width: 100%;
  display: flex;

  ${(props) => props.flexCenter && 'justify-content:center'};
  ${(props) => props.flexCenter && 'align-items:center'};
`

interface ViewProps extends SelectHTMLAttributes<HTMLDivElement>, ICSSResponsive {
  type?: 'col' | 'row'
}

export const View = styled.div<ViewProps>`
  ${style}
  flex-direction: ${(props) => (!props.type || props.type === 'col' ? 'column' : 'row')};
`

export const RowView = styled.div<ViewProps>`
  ${style}
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: ${(props) => (props.mobileToCol ? 'column' : 'row')};
  }
`

export const ColView = styled.div`
  ${style}
  padding:5px;
  margin: 5px;
  flex-direction: column;
`
