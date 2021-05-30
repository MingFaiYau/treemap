import styled from 'styled-components'
import { MOBILE_WIDTH } from '../../utils/constant'

export const Text = styled.div`
  padding: 0;
  margin: 0;
  color: black;
`

export const TitleText = styled(Text)`
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 10px;
  border-bottom: 2px solid black;
  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    text-align: center;
  }
`

export const InputText = styled(Text)`
  font-size: 1rem;
  width: 70px;
  text-align: right;
  margin-right: 5px;
`

export const TreeMapItemText = styled(Text)`
  font-size: 1rem;
  font-weight: bolder;
`
