import { Grid, IconButton } from '@material-ui/core'

import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: fixed;
        top: ${theme.spacing(1)};
        z-index: 1000;
  `}
`

export const Button = styled(IconButton)``

export const Icon = styled(ExpandLessIcon)`
    ${({ theme }) => `
        opacity: 0.5;
        width: ${theme.spacing(24)};
        height: ${theme.spacing(24)};
  `}
`
