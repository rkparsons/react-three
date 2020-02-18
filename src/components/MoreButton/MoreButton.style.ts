import { Grid, IconButton } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        bottom: ${theme.spacing(1)};
  `}
`

export const Button = styled(IconButton)``

export const Icon = styled(ExpandMoreIcon)`
    ${({ theme }) => `
        color: white;
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
  `}
`
