import { Grid, IconButton } from '@material-ui/core'

import CodeIcon from '@material-ui/icons/Code'
import styled from 'styled-components'

export const GridContainer = styled(Grid)`
    ${({ theme }) => `
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        left: ${theme.spacing(100)};
  `}
`

export const Button = styled(IconButton)``

export const Icon = styled(CodeIcon)`
    ${({ theme }) => `
        width: ${theme.spacing(16)};
        height: ${theme.spacing(16)};
  `}
`
