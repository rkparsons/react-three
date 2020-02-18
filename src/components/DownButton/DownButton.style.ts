import { Grid, IconButton } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        bottom: ${theme.spacing(1)};
        z-index: 1000;
  `}
`

export const Button = styled(IconButton)``

export const Icon = styled(ExpandMoreIcon)`
    ${({ theme }) => `
        opacity: 0.5;
        width: ${theme.spacing(24)};
        height: ${theme.spacing(24)};
  `}
`
