import "@fontsource/montserrat/900.css"
import '@fontsource/montserrat'
import React from 'react'
import styled from 'styled-components'
import { pageFullHeight } from './src/services/mixin'

const Root = styled.div`
  ${pageFullHeight}
`

export const wrapRootElement = ({ element }) => (
  <Root>{element}</Root>
)