import "@fontsource/montserrat/900.css"
import '@fontsource/montserrat'
import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  height: calc(100vh - 4.5rem);
  min-height: calc(100vh - 4.5rem);
`

export const wrapRootElement = ({ element }) => (
  <Root id="cory">{element}</Root>
)