import { Grid } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    overflow: scroll;
    height: 100vh;
`

export const ButtonContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        top: ${theme.spacing(1)};
        z-index: 1000;
  `}
`

export const GridItem = styled(Grid)`
    height: 100vh;
    position: relative;
`
